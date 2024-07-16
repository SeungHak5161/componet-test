import { render } from "@testing-library/react";
import MyInput from "./MyInput";

describe("Myinput", () => {
  it("should render correctly", () => {
    // MyInput 컴포넌트 렌더링
    const { unmount } = render(<MyInput label={"test"} />);
    // wrappedBuildError.unmount() 호출시에도 에러 발생하지 않는지 확인
    expect(unmount).not.toThrow();
  });
});
