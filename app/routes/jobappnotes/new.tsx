import type { ActionFunction } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { Form, useActionData } from "@remix-run/react";
import React, { useState } from "react";
import { createJobAppNote } from "~/models/jobapp.server";
import { requireUserId } from "~/session.server";
import { v4 as uuidv4 } from "uuid";
import { motion } from "framer-motion";

type ActionData = {
  errors?: {
    title?: string;
    yourName?: string;
    phoneNumber?: string;
    DesiredSalary?: string;
    referenceOne?: string;
    referenceTwo?: string;
    referenceThree?: string;
    body?: string;
    positionTitle?: string;
    duties?: string;
    employerName?: string;
    address?: string;
    employmentStartDate?: string;
    employmentEndDate?: string;
  };
};

interface PreviousPosition {
  id: string;
  positionTitle: string;
  duties: string;
  employerName: string;
  address: string;
  employmentStartDate: string;
  employmentEndDate: string;
}

export const action: ActionFunction = async ({ request }) => {
  const userId = await requireUserId(request);

  const formData = await request.formData();

  const title = formData.get("title");
  const yourName = formData.get("yourName");
  const phoneNumber = formData.get("phoneNumber");
  const DesiredSalary = formData.get("DesiredSalary");
  const referenceOne = formData.get("referenceOne");
  const referenceTwo = formData.get("referenceTwo");
  const referenceThree = formData.get("referenceThree");
  const body = formData.get("body");

  const previousPositions: PreviousPosition[] = [];

for (let i = 0; formData.get(`positionTitle_${i}`); i++) {
  const positionTitle = formData.get(`positionTitle_${i}`)?.toString().trim() as string;
  const duties = formData.get(`duties_${i}`)?.toString().trim() as string;
  const employerName = formData.get(`employerName_${i}`)?.toString().trim() as string;
  const address = formData.get(`address_${i}`)?.toString().trim() as string;
  const employmentStartDate = formData.get(`employmentStartDate_${i}`)?.toString().trim() as string;
  const employmentEndDate = formData.get(`employmentEndDate_${i}`)?.toString().trim() as string;

  if (typeof positionTitle !== "string" || positionTitle.trim().length === 0) {
    return json<ActionData>(
      { errors: { [`positionTitle_${i}`]: "Position Title is required" } },
      { status: 400 }
    );
  }

  if (typeof duties !== "string" || duties.trim().length === 0) {
    return json<ActionData>(
      { errors: { [`duties_${i}`]: "Duties is required" } },
      { status: 400 }
    );
  }

  if (typeof employerName !== "string" || employerName.trim().length === 0) {
    return json<ActionData>(
      { errors: { [`employerName_${i}`]: "Employer Name is required" } },
      { status: 400 }
    );
  }

  if (typeof address !== "string" || address.trim().length === 0) {
    return json<ActionData>(
      { errors: { [`address_${i}`]: "Address is required" } },
      { status: 400 }
    );
  }

  if (typeof employmentStartDate !== "string" || employmentStartDate.trim().length === 0) {
    return json<ActionData>(
      { errors: { [`employmentStartDate_${i}`]: "Employment Start Date is required" } },
      { status: 400 }
    );
  }

  if (typeof employmentEndDate !== "string" || employmentEndDate.trim().length === 0) {
    return json<ActionData>(
      { errors: { [`employmentEndDate_${i}`]: "Employment End Date is required" } },
      { status: 400 }
    );
  }

  previousPositions.push({
    id: uuidv4(),
    positionTitle,
    duties,
    employerName,
    address,
    employmentStartDate,
    employmentEndDate,
  });
}

  if (typeof title !== "string" || title.length === 0) {
    return json<ActionData>(
      { errors: { title: "Title is required" } },
      { status: 400 }
    );
  }

  if (typeof body !== "string" || body.length === 0) {
    return json<ActionData>(
      { errors: { body: "Body is required" } },
      { status: 400 }
    );
  }

  if (typeof title !== "string" || title.length === 0) {
    return json<ActionData>(
      { errors: { title: "Title is required" } },
      { status: 400 }
    );
  }

  if (typeof yourName !== "string" || yourName.length === 0) {
    return json<ActionData>(
      { errors: { yourName: "your Name is required" } },
      { status: 400 }
    );
  }

  if (typeof phoneNumber !== "string" || phoneNumber.length === 0) {
    return json<ActionData>(
      { errors: { phoneNumber: "Phone Number is required" } },
      { status: 400 }
    );
  }

  if (typeof DesiredSalary !== "string" || DesiredSalary.length === 0) {
    return json<ActionData>(
      { errors: { DesiredSalary: "Body is required" } },
      { status: 400 }
    );
  }

  if (typeof referenceOne !== "string" || referenceOne.length === 0) {
    return json<ActionData>(
      { errors: { referenceOne: "reference 1  is required" } },
      { status: 400 }
    );
  }

  if (typeof referenceTwo !== "string" || referenceTwo.length === 0) {
    return json<ActionData>(
      { errors: { referenceTwo: "reference 2  is required" } },
      { status: 400 }
    );
  }

  if (typeof referenceThree !== "string" || referenceThree.length === 0) {
    return json<ActionData>(
      { errors: { referenceThree: "reference  is required" } },
      { status: 400 }
    );
  }

  const jobnote = await createJobAppNote({
    title,
    yourName,
    phoneNumber,
    DesiredSalary,
    referenceOne,
    referenceTwo,
    referenceThree,
    body,
    userId,
    previousPositions,
  });

  return redirect(`/jobappnotes/${jobnote.id}`);
};

export default function NewJobAppPage() {
  const actionData = useActionData() as ActionData;
  const titleRef = React.useRef<HTMLInputElement>(null);
  const yourNameRef = React.useRef<HTMLInputElement>(null);
  const phoneRef = React.useRef<HTMLInputElement>(null);
  const desiredSalaryRef = React.useRef<HTMLInputElement>(null);
  const referenceOneRef = React.useRef<HTMLInputElement>(null);
  const referenceTwoRef = React.useRef<HTMLInputElement>(null);
  const referenceThreeRef = React.useRef<HTMLInputElement>(null);
  const bodyRef = React.useRef<HTMLTextAreaElement>(null);
  const positionTitleRef = React.useRef<HTMLTextAreaElement>(null);
  const dutiesRef = React.useRef<HTMLTextAreaElement>(null);
  const employerNameRef = React.useRef<HTMLTextAreaElement>(null);
  const addressRef = React.useRef<HTMLTextAreaElement>(null);
  const employmentStartDateRef = React.useRef<HTMLTextAreaElement>(null);
  const employmentEndDateRef = React.useRef<HTMLTextAreaElement>(null);
  React.useEffect(() => {
    if (actionData?.errors?.title) {
      titleRef.current?.focus();
    } else if (actionData?.errors?.body) {
      bodyRef.current?.focus();
    } else if (actionData?.errors?.yourName) {
      yourNameRef.current?.focus();
    } else if (actionData?.errors?.phoneNumber) {
      phoneRef.current?.focus();
    } else if (actionData?.errors?.DesiredSalary) {
      desiredSalaryRef.current?.focus();
    } else if (actionData?.errors?.referenceOne) {
      referenceOneRef.current?.focus();
    } else if (actionData?.errors?.referenceTwo) {
      referenceTwoRef.current?.focus();
    } else if (actionData?.errors?.referenceThree) {
      referenceThreeRef.current?.focus();
    } else if (actionData?.errors?.positionTitle) {
      positionTitleRef.current?.focus();
    } else if (actionData?.errors?.duties) {
      dutiesRef.current?.focus();
    } else if (actionData?.errors?.employerName) {
      employerNameRef.current?.focus();
    } else if (actionData?.errors?.address) {
      addressRef.current?.focus();
    } else if (actionData?.errors?.employmentStartDate) {
      employmentStartDateRef.current?.focus();
    } else if (actionData?.errors?.employmentEndDate) {
      employmentEndDateRef.current?.focus();
    }
  }, [actionData]);

  const [previousPositions, setPreviousPositions] = useState<
    PreviousPosition[]
  >([
    {
      id: uuidv4(),
      positionTitle: "",
      duties: "",
      employerName: "",
      address: "",
      employmentStartDate: "",
      employmentEndDate: "",
    },
  ]);

  const handleAddPreviousPosition = () => {
    const newPreviousPosition = {
      id: uuidv4(),
      positionTitle: "",
      duties: "",
      employerName: "",
      address: "",
      employmentStartDate: "",
      employmentEndDate: "",
    };

    if (previousPositions.length === 1 && !previousPositions[0].id) {
      setPreviousPositions([newPreviousPosition]);
    } else {
      setPreviousPositions([...previousPositions, newPreviousPosition]);
    }
  };

  const handleRemovePreviousPosition = (index: number) => {
    setPreviousPositions(previousPositions.filter((_, i) => i !== index));
  };

  function handleChangePreviousPosition(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number,
    field: keyof PreviousPosition
  ) {
    const newValue = event.target.value;
    setPreviousPositions((prevPositions) => {
      const newPositions = [...prevPositions];
      newPositions[index] = {
        ...newPositions[index],
        [field]: newValue,
      };
      return newPositions;
    });
  }

  return (
    <motion.div
    initial={{ opacity: 0, x: '-2vh' }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
>
    <Form
      method="post"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 8,
        width: "100%",
      }}
    >
      <div>
        <label className="flex w-full flex-col gap-1 block text-gray-700 font-bold mb-2">
          <span className ="mb-2">Job Application Loadout Title: </span>
          <input
            ref={titleRef}
            name="title"
            className="flex-1 shadow appearance-none border rounded border-custom-newColor w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            aria-invalid={actionData?.errors?.title ? true : undefined}
            aria-errormessage={
              actionData?.errors?.title ? "title-error" : undefined
            }
          />
        </label>
        {actionData?.errors?.title && (
          <div className="pt-1 text-red-700" id="title-error">
            {actionData.errors.title}
          </div>
        )}
      </div>

      <div>
        <label className="flex w-full flex-col gap-1 block text-gray-700 font-bold mb-2">
          <span className ="mb-2">Name: </span>
          <input
            ref={yourNameRef}
            name="yourName"
            className="flex-1 shadow appearance-none border rounded border-custom-newColor w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            aria-invalid={actionData?.errors?.yourName ? true : undefined}
            aria-errormessage={
              actionData?.errors?.yourName ? "title-error" : undefined
            }
          />
        </label>
        {actionData?.errors?.yourName && (
          <div className="pt-1 text-red-700" id="title-error">
            {actionData.errors.yourName}
          </div>
        )}
      </div>

      <div>
        <label className="flex w-full flex-col gap-1 block text-gray-700 font-bold mb-2">
          <span className ="mb-2">Cell Phone Number: </span>
          <input
            ref={phoneRef}
            name="phoneNumber"
            className="flex-1 shadow appearance-none border rounded border-custom-newColor w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            aria-invalid={actionData?.errors?.phoneNumber ? true : undefined}
            aria-errormessage={
              actionData?.errors?.phoneNumber ? "title-error" : undefined
            }
          />
        </label>
        {actionData?.errors?.phoneNumber && (
          <div className="pt-1 text-red-700" id="title-error">
            {actionData.errors.phoneNumber}
          </div>
        )}
      </div>

      <div>
        <label className="flex w-full flex-col gap-1 block text-gray-700 font-bold mb-2">
          <span className ="mb-2">Desired Salary: </span>
          <input
            ref={desiredSalaryRef}
            name="DesiredSalary"
            className="flex-1 shadow appearance-none border rounded border-custom-newColor w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            aria-invalid={actionData?.errors?.DesiredSalary ? true : undefined}
            aria-errormessage={
              actionData?.errors?.DesiredSalary ? "title-error" : undefined
            }
          />
        </label>
        {actionData?.errors?.DesiredSalary && (
          <div className="pt-1 text-red-700" id="title-error">
            {actionData.errors.DesiredSalary}
          </div>
        )}
      </div>

      <div>
        <label className="flex w-full flex-col gap-1 block text-gray-700 font-bold mb-2">
          <span className ="mb-2">Reference 1: </span>
          <input
            ref={referenceOneRef}
            name="referenceOne"
            className="flex-1 shadow appearance-none border rounded border-custom-newColor w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            aria-invalid={actionData?.errors?.referenceOne ? true : undefined}
            aria-errormessage={
              actionData?.errors?.referenceOne ? "title-error" : undefined
            }
          />
        </label>
        {actionData?.errors?.referenceOne && (
          <div className="pt-1 text-red-700" id="title-error">
            {actionData.errors.referenceOne}
          </div>
        )}
      </div>

      <div>
        <label className="flex w-full flex-col gap-1 block text-gray-700 font-bold mb-2">
          <span  className ="mb-2">Reference 2: </span>
          <input
            ref={referenceTwoRef}
            name="referenceTwo"
            className="flex-1 shadow appearance-none border rounded border-custom-newColor w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            aria-invalid={actionData?.errors?.referenceTwo ? true : undefined}
            aria-errormessage={
              actionData?.errors?.referenceTwo ? "title-error" : undefined
            }
          />
        </label>
        {actionData?.errors?.referenceTwo && (
          <div className="pt-1 text-red-700" id="title-error">
            {actionData.errors.referenceTwo}
          </div>
        )}
      </div>

      <div>
        <label className="flex w-full flex-col gap-1 block text-gray-700 font-bold mb-2">
          <span  className ="mb-2">Reference 3: </span>
          <input
            ref={referenceThreeRef}
            name="referenceThree"
            className="flex-1 shadow appearance-none border rounded border-custom-newColor w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            aria-invalid={actionData?.errors?.referenceThree ? true : undefined}
            aria-errormessage={
              actionData?.errors?.referenceThree ? "title-error" : undefined
            }
          />
        </label>
        {actionData?.errors?.referenceThree && (
          <div className="pt-1 text-red-700" id="title-error">
            {actionData.errors.referenceThree}
          </div>
        )}
      </div>
      <div className="space-y-4">
        {previousPositions.map((position, index) => (
          <div key={position.id}>
            <label
              className="flex w-full flex-col gap-1 block text-gray-700 font-bold mb-2"
              htmlFor={`positionTitle_${index}`}
            >
             <span  className ="mb-2"> Position Title</span>
              <input
                className="flex-1 shadow appearance-none border rounded border-custom-newColor w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name={`positionTitle_${index}`}
                id={`positionTitle_${index}`}
                value={position.positionTitle}
                onChange={(event) =>
                  handleChangePreviousPosition(event, index, "positionTitle")
                }
                aria-invalid={
                  actionData?.errors?.positionTitle ? true : undefined
                }
                aria-errormessage={
                  actionData?.errors?.positionTitle ? "title-error" : undefined
                }
              />
            </label>
            {actionData?.errors?.positionTitle && (
              <div className="pt-1 text-red-700" id="title-error">
                {actionData.errors.positionTitle}
              </div>
            )}
            <div className="my-2">
              <label
                className="flex w-full flex-col gap-1 block text-gray-700 font-bold mb-2"
                htmlFor={`duties_${index}`}
              ><span  className ="mb-2">
                Duties</span>
                <textarea
                  className="flex-1 shadow appearance-none border rounded border-custom-newColor w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name={`duties_${index}`}
                  id={`duties_${index}`}
                  value={position.duties}
                  placeholder = "Enter your job duties here..."
                  onChange={(event) =>
                    handleChangePreviousPosition(event, index, "duties")
                  }
                  aria-invalid={actionData?.errors?.duties ? true : undefined}
                  aria-errormessage={
                    actionData?.errors?.duties ? "title-error" : undefined
                  }
                />
              </label>
              {actionData?.errors?.duties && (
                <div className="pt-1 text-red-700" id="title-error">
                  {actionData.errors.duties}
                </div>
              )}
            </div>
            <div className="my-2">
              <label
                className="flex w-full flex-col gap-1 block text-gray-700 font-bold mb-2"
                htmlFor={`employerName_${index}`}
              ><span  className ="mb-2">
                Employer Name </span>
                <input
                  className="flex-1 shadow appearance-none border rounded border-custom-newColor w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  name={`employerName_${index}`}
                  id={`employerName_${index}`}
                  value={position.employerName}
                  onChange={(event) =>
                    handleChangePreviousPosition(event, index, "employerName")
                  }
                  aria-invalid={
                    actionData?.errors?.employerName ? true : undefined
                  }
                  aria-errormessage={
                    actionData?.errors?.employerName ? "title-error" : undefined
                  }
                />
              </label>
              {actionData?.errors?.employerName && (
                <div className="pt-1 text-red-700" id="title-error">
                  {actionData.errors.employerName}
                </div>
              )}
            </div>
            <div className="my-2">
              <label
                className="flex w-full flex-col gap-1 block text-gray-700 font-bold mb-2"
                htmlFor={`address_${index}`}
              ><span  className ="mb-2">
               Employer Address </span>
                <input
                  className=" flex-1 shadow appearance-none border rounded border-custom-newColor w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  name={`address_${index}`}
                  id={`address_${index}`}
                  value={position.address}
                  onChange={(event) =>
                    handleChangePreviousPosition(event, index, "address")
                  }
                  aria-invalid={actionData?.errors?.address ? true : undefined}
                  aria-errormessage={
                    actionData?.errors?.address ? "title-error" : undefined
                  }
                />
              </label>
              {actionData?.errors?.address && (
                <div className="pt-1 text-red-700" id="title-error">
                  {actionData.errors.address}
                </div>
              )}
            </div>
            <div className="my-2">
              <label
                className="flex w-full flex-col gap-1 block text-gray-700 font-bold mb-2"
                htmlFor={`employmentStartDate_${index}`}
              > <span  className ="mb-2">
                Employment Start Date</span>
                <input
                  className="flex-1 shadow appearance-none border rounded border-custom-newColor w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="Date"
                  name={`employmentStartDate_${index}`}
                  id={`employmentStartDate_${index}`}
                  value={position.employmentStartDate}
                  onChange={(event) =>
                    handleChangePreviousPosition(
                      event,
                      index,
                      "employmentStartDate"
                    )
                  }
                  aria-invalid={
                    actionData?.errors?.employmentStartDate ? true : undefined
                  }
                  aria-errormessage={
                    actionData?.errors?.employmentStartDate
                      ? "title-error"
                      : undefined
                  }
                />
              </label>
              {actionData?.errors?.employmentStartDate && (
                <div className="pt-1 text-red-700" id="title-error">
                  {actionData.errors.employmentStartDate}
                </div>
              )}
            </div>
            <div className="my-2">
              <label
                className="flex w-full flex-col gap-1 block text-gray-700 font-bold mb-2"
                htmlFor={`employmentEndDate_${index}`}
              ><span className ="mb-2">
                Employment End Date</span>
                <input
                  className="flex-1 shadow appearance-none border rounded border-custom-newColor w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="Date"
                  name={`employmentEndDate_${index}`}
                  id={`employmentEndDate_${index}`}
                  value={position.employmentEndDate}
                  onChange={(event) =>
                    handleChangePreviousPosition(
                      event,
                      index,
                      "employmentEndDate"
                    )
                  }
                  aria-invalid={
                    actionData?.errors?.employmentEndDate ? true : undefined
                  }
                  aria-errormessage={
                    actionData?.errors?.employmentEndDate
                      ? "title-error"
                      : undefined
                  }
                />
              </label>
              {actionData?.errors?.employmentEndDate && (
                <div className="pt-1 text-red-700" id="title-error">
                  {actionData.errors.employmentEndDate}
                </div>
              )}
            </div>
            <button
              className="rounded bg-teal-400 py-2 font-bold px-4 my-4 text-white hover:bg-custom-newColor focus:bg-blue-400"
              type="button"
              onClick={() => handleRemovePreviousPosition(index)}
            >
              Remove
            </button>
          </div>
        ))}
        <button
          className="rounded bg-teal-400  font-bold py-2 px-4 my-4 text-white hover:bg-custom-newColor 
          focus:bg-blue-400"
          type="button"
          onClick={handleAddPreviousPosition}
        >
          Add Position
        </button>
      </div>

      <div>
        <label className="flex w-full flex-col gap-1 block text-gray-700 font-bold mb-2">
          <span>Additional Notes: </span>
          <textarea
            ref={bodyRef}
            name="body"
            rows={8}
            className="w-full flex-1 rounded-md border-2 border-custom-newColor py-2 px-3 text-lg leading-6"
            placeholder = "Enter any additional notes you may have here..."
            aria-invalid={actionData?.errors?.body ? true : undefined}
            aria-errormessage={
              actionData?.errors?.body ? "body-error" : undefined
            }
          />
        </label>
        {actionData?.errors?.body && (
          <div className="pt-1 text-red-700" id="body-error">
            {actionData.errors.body}
          </div>
        )}
      </div>
      <div className="text-right my-14">
        <button
          type="submit"
          className="rounded bg-teal-400 font-bold py-2 px-4 text-white hover:bg-custom-newColor focus:bg-custom-newColor"
        >
          Save
        </button>
      </div>
      </Form>
    </motion.div>
  );
}
