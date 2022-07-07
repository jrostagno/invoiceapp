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
import Subtitle from "../../components/Text/Subtitle";
import Title from "../../components/Text/Title";

const register = () => {
  return (
    <AppLayout>
      <Head>
        <title>Invoiceapp</title>
      </Head>

      <PanelCard size="med">
        <Title className="p-4">Personal information</Title>
        <form>
          <UploadImages className="flex justify-center mt-4"></UploadImages>
          <div className="flex flex-col justify-between w-full p-4">
            <LabelForm htmlFor="userName">Name</LabelForm>
            <InputForm
              autoFocus
              required
              id="userName"
              placeholder="Your name..."
              type="text"
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
            />
          </div>
          <div className="flex justify-end gap-2 px-4">
            <ButtonPrimary>Update</ButtonPrimary>
          </div>
        </form>
      </PanelCard>
      <PanelCard size="med">
        <Title className="p-4">Security</Title>
        <form>
          <div className="flex flex-col justify-between w-full p-4">
            <LabelForm htmlFor="actualPassword">Actual password</LabelForm>
            <InputForm autoFocus required id="actualPassword" type="password" />
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
            <LabelForm htmlFor="passwordConfirm">Confirm password</LabelForm>
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
    </AppLayout>
  );
};

export default register;
