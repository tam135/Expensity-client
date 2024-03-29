import React from "react";
import { shallow, configure } from "enzyme";
import ExpenseList from "../Components/ExpenseList/ExpenseList";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });
test("should render ExpenseList correctly", () => {
  const wrapper = shallow(<ExpenseList />);
  expect(wrapper).toMatchSnapshot();
});
