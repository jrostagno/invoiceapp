import { getSession } from "next-auth/react";
import Head from "next/head";
import React from "react";
import ButtonDanger from "../../components/Button/ButtonDanger";
import ButtonPrimary from "../../components/Button/ButtonPrimary";
import InputForm from "../../components/input/InputForm";
import UploadImages from "../../components/input/UploadImages";
import AppLayout from "../../components/Layout/AppLayout";

import { PanelCard } from "../../components/Panel/PanelCard";
import LabelForm from "../../components/Text/LabelForm";
import { Session } from "../../types";
import Title from "../../components/Text/Title";

interface RegisterProps {
  session: Session;
}

const Register: React.FC<RegisterProps> = ({ session }) => {
  return (
    <AppLayout session={session}>
      <Head>
        <title>Invoiceapp</title>
      </Head>

      <div className="w-full ">
        <PanelCard size="md">
          <Title className="p-4">Personal information</Title>
          <form>
            <UploadImages
              avatar={session.user.image}
              className="flex justify-center mt-4 cursor-not-allowed"
            ></UploadImages>
            <div className="flex flex-col justify-between w-full p-4">
              <LabelForm>Name</LabelForm>
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
              <LabelForm>Email</LabelForm>
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
              <ButtonDanger className="cursor-not-allowed">
                Close Account
              </ButtonDanger>
              <ButtonPrimary className="cursor-not-allowed">
                Update
              </ButtonPrimary>
            </div>
          </form>
        </PanelCard>
      </div>
    </AppLayout>
  );
};

export default Register;

export const getServerSideProps = async (context: any) => {
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
