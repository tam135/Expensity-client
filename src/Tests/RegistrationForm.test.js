import React from "react";
import { shallow, configure } from "enzyme";
import RegistrationForm from "../Components/RegistrationForm/RegistrationForm";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });
test("should render RegistrationForm correctly", () => {
  const wrapper = shallow(<RegistrationForm />);
  expect(wrapper).toMatchSnapshot();
});
