import type { User, JobAppNote,  PreviousPosition, Prisma } from "@prisma/client";
import { prisma } from "~/db.server";


export type { JobAppNote,  PreviousPosition} from "@prisma/client";



export function getJobAppNote({
  id,
  userId,
}: Pick<JobAppNote, "id"> & {
  userId: User["id"];
  previousPositions: PreviousPosition[];

}) {
  return prisma.jobAppNote.findFirst({
    where: { id, userId },
    include: {
      previousPositions: true,
    },
  });
}

export function getJobAppNoteListItems({ userId }: { userId: User["id"] }): Promise<Pick<JobAppNote, "id" | "title">[]> {
  return prisma.jobAppNote.findMany({
    where: { userId },
    select: { id: true, title: true },
    orderBy: { updatedAt: "desc" },
  });
}



export async function createJobAppNote({
  title,
  body,
  yourName,
  phoneNumber,
  DesiredSalary,
  referenceOne,
  referenceTwo,
  referenceThree,

  previousPositions,
  userId,
}: Pick<JobAppNote, "title" | "body" | "yourName" | "phoneNumber" | "DesiredSalary" | "referenceOne" | "referenceTwo" | "referenceThree" | "userId" > & {
  previousPositions: PreviousPosition[];
}) {
  const jobAppNote: JobAppNote = await prisma.jobAppNote.create({
    data: {
      title,
      body,
      yourName,
      phoneNumber,
      DesiredSalary,
      referenceOne,
      referenceTwo,
      referenceThree,
     
      previousPositions: {
        create: previousPositions,
      },
      user: {
        connect: {
          id: userId,
        },
      },
    },
  });
  return jobAppNote;
}


export async function deleteNote({
  id,
  
}: Pick<JobAppNote, "id"> & { userId: User["id"] }): Promise<{ count: number }> {
  return prisma.$transaction(async (prisma) => {
    const jobAppNote = await prisma.jobAppNote.findUnique({
      where: { id },
      include: { previousPositions: true },
    });
    if (!jobAppNote) {
      throw new Error("Job application note not found");
    }

    const deletePreviousPositions = prisma.previousPosition.deleteMany({
      where: { id: { in: jobAppNote.previousPositions.map((position) => position.id) } },
    });

    const deleteJobAppNote = prisma.jobAppNote.delete({
      where: { id },
    });

    await Promise.all([deletePreviousPositions, deleteJobAppNote]);
    return { count: 1 };
  });
}
