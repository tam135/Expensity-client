import React from "react";
import { shallow, configure } from "enzyme";
import LoginForm from "../Components/LoginForm/LoginForm";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });
test("should render LoginForm correctly", () => {
  const wrapper = shallow(<LoginForm />);
  expect(wrapper).toMatchSnapshot();
});
