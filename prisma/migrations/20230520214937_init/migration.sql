-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Password" (
    "hash" TEXT NOT NULL,
    "userId" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Note" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Note_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "JobAppNote" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "yourName" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "DesiredSalary" TEXT NOT NULL,
    "referenceOne" TEXT NOT NULL,
    "referenceTwo" TEXT NOT NULL,
    "referenceThree" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "JobAppNote_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PreviousPosition" (
    "id" TEXT NOT NULL,
    "positionTitle" TEXT NOT NULL,
    "duties" TEXT NOT NULL,
    "employerName" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "employmentStartDate" TEXT NOT NULL,
    "employmentEndDate" TEXT NOT NULL,

    CONSTRAINT "PreviousPosition_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Post" (
    "slug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "markdown" TEXT NOT NULL,
    "jobAppLink" TEXT NOT NULL,
    "appStatus" TEXT,
    "coordinateLat" TEXT NOT NULL,
    "coordinateLong" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("slug")
);

-- CreateTable
CREATE TABLE "_JobAppNoteToPreviousPosition" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Password_userId_key" ON "Password"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "_JobAppNoteToPreviousPosition_AB_unique" ON "_JobAppNoteToPreviousPosition"("A", "B");

-- CreateIndex
CREATE INDEX "_JobAppNoteToPreviousPosition_B_index" ON "_JobAppNoteToPreviousPosition"("B");

-- AddForeignKey
ALTER TABLE "Password" ADD CONSTRAINT "Password_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Note" ADD CONSTRAINT "Note_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JobAppNote" ADD CONSTRAINT "JobAppNote_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_JobAppNoteToPreviousPosition" ADD CONSTRAINT "_JobAppNoteToPreviousPosition_A_fkey" FOREIGN KEY ("A") REFERENCES "JobAppNote"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_JobAppNoteToPreviousPosition" ADD CONSTRAINT "_JobAppNoteToPreviousPosition_B_fkey" FOREIGN KEY ("B") REFERENCES "PreviousPosition"("id") ON DELETE CASCADE ON UPDATE CASCADE;
