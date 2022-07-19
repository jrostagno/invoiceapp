import { getSession } from "next-auth/react";
import Head from "next/head";
import React from "react";
import ButtonDanger from "../../components/Button/ButtonDanger";
import ButtonPrimary from "../../components/Button/ButtonPrimary";
import InputForm from "../../components/input/InputForm";
import UploadImages from "../../components/input/UploadImages";
import AppLayout from "../../components/Layout/AppLayout";
import { Panel } from "../../components/Panel/Panel";
import { PanelCard } from "../../components/Panel/PanelCard";
import LabelForm from "../../components/Text/LabelForm";
import Title from "../../components/Text/Title";

const register = ({ session }) => {
  console.log(session);
  return (
    <AppLayout>
      <Head>
        <title>Invoiceapp</title>
      </Head>
      <div className="flex flex-col md:flex-row">
        <div className="w-full ">
          <PanelCard size="med">
            <Title className="p-4">Personal information</Title>
            <form>
              <UploadImages
                avatar={session.user.image}
                className="flex justify-center mt-4"
              ></UploadImages>
              <div className="flex flex-col justify-between w-full p-4">
                <LabelForm htmlFor="userName">Name</LabelForm>
                <InputForm
                  autoFocus
                  required
                  id="userName"
                  placeholder="Your name..."
                  type="text"
                  value={session.user.name}
                />
              </div>
              <div className="flex flex-col justify-between w-full p-4">
                <LabelForm htmlFor="email">Email</LabelForm>
                <InputForm
                  autoFocus
                  required
                  id="email"
                  placeholder="Your email..."
                  type="email"
                  value={session.user.email}
                />
              </div>
              <div className="flex justify-end gap-2 px-4">
                <ButtonDanger>Close Account</ButtonDanger>
                <ButtonPrimary>Update</ButtonPrimary>
              </div>
            </form>
          </PanelCard>
        </div>
        <div className="w-full ">
          <PanelCard size="med">
            <Title className="p-4">Security</Title>
            <form>
              <div className="flex flex-col justify-between w-full p-4">
                <LabelForm htmlFor="actualPassword">Actual password</LabelForm>
                <InputForm
                  autoFocus
                  required
                  id="actualPassword"
                  type="password"
                />
              </div>
              <div className="flex flex-col justify-between w-full p-4">
                <LabelForm htmlFor="newPassword">New password</LabelForm>
                <InputForm
                  autoFocus
                  required
                  id="newPassword"
                  placeholder="Enter new password"
                  type="password"
                />
              </div>
              <div className="flex flex-col justify-between w-full p-4">
                <LabelForm htmlFor="passwordConfirm">
                  Confirm password
                </LabelForm>
                <InputForm
                  autoFocus
                  required
                  id="passwordConfirm"
                  placeholder="Confirm password"
                  type="passwordConfirm"
                />
              </div>

              <div className="flex justify-end gap-2 px-4">
                <ButtonPrimary>Update</ButtonPrimary>
              </div>
            </form>
          </PanelCard>
        </div>
      </div>
    </AppLayout>
  );
};

export default register;

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session)
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };

  return {
    props: {
      session,
    },
  };
};
