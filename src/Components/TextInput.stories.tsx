import { Meta, StoryObj } from "@storybook/react";
import { Envelope } from "phosphor-react";
import uuid from "react-uuid";
// uuid

import {
  TextInput,
  TextInputInputProps,
  TextInputRootProps,
} from "./TextInput";

export default {
  title: "Components/TextInput",
  component: TextInput.Root,
  args: {
    children: [
      <TextInput.Icon key={uuid()}>
        <Envelope />
      </TextInput.Icon>,
      <TextInput.Input key={uuid()} placeholder="Type your email here" />,
    ],
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<TextInputInputProps>;

export const Default: StoryObj<TextInputInputProps> = {};
export const WithoutIcon: StoryObj<TextInputInputProps> = {
  args: {
    children: <TextInput.Input placeholder="Type your email here" />,
  },
};
