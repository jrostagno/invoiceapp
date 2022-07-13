import Head from "next/head";
import React from "react";
import ButtonDanger from "../components/Button/ButtonDanger";
import ButtonPrimary from "../components/Button/ButtonPrimary";
import InputForm from "../components/input/InputForm";
import AppLayout from "../components/Layout/AppLayout";

import { PanelCard } from "../components/Panel/PanelCard";
import LabelForm from "../components/Text/LabelForm";

import Title from "../components/Text/Title";

const register = () => {
  return (
    <AppLayout guest>
      <Head>
        <title>Invoiceapp</title>
      </Head>
      <div className="min-h-screen ">
        <PanelCard size="large">
          <Title className="p-4">Register</Title>
          <form>
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

            <div className="flex flex-col justify-between w-full p-4">
              <LabelForm htmlFor="password">Password</LabelForm>
              <InputForm
                autoFocus
                required
                id="password"
                placeholder="Enter password"
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
              <ButtonDanger>Cancel</ButtonDanger>
              <ButtonPrimary>Create</ButtonPrimary>
            </div>
          </form>
        </PanelCard>
      </div>
    </AppLayout>
  );
};

export default register;
