import React from "react";
import {
  fireEvent,
  render,
  screen,
  waitFor,
  waitForElement,
} from "@testing-library/react";
import App from "./App";

// NOTE: SAMPLE
// jest.mock("react-i18next", () => ({
//   useTranslation: () => ({ t: (key: any) => key }),
//   Trans: ({ children }: any) => children,
// }));

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/welcome/i);
  expect(linkElement).toBeInTheDocument();
});

// describe('marvel/services', () => {
//   afterEach(() => {
//     jest.clearAllMocks();
//   });

//   // this test passes perfectly
//   it('Calls action when 1st form btn is clicked', async () => {
//     const { getByText, getByLabelText } = render(<App />);

//     const firstInput = getByLabelText('1st input label');
//     const firstButton = getByText('1st button text');

//     fireEvent.change(firstInput, { target: { value: 'blablabla' } });

//     await waitFor(() => {
//       fireEvent.click(firstButton);
//     });

//     waitFor(() => {
//       expect(testingCallbackFuncStep1).toBe(1);
//     });
//   });
//   // here I got the problem
//   it('Calls action when 2nd form btn is clicked', async () => {
//     const { getByText, getByLabelText } = render(...My component...);

//     const _firstInput = getByLabelText('1st input label');
//     const _firstButton = getByText('1st button text');

//     fireEvent.change(_firstInput, { target: { value: 'blablabla' } });

//     await waitFor(() => {
//       fireEvent.click(_firstButton);
//     });

//     await waitForElement(() => [getByLabelText('2nd input label'), getByText('2nd button text')]);

//     // from here to the end of the suite, nothing is triggered
//     fireEvent.change(getByLabelText('2nd input label'), { target: { value: 'blablabla 2' } });

//     await waitFor(() => {
//       fireEvent.click(getByText('2nd button text'));
//     });

//     waitFor(() => {
//       expect(testingCallbackFuncStep2).toBe(1);
//     });
//   });
// });
