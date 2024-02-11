import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { describe, expect } from "vitest";
import Autocomplete from "@/components/autocomplete-input";

describe("Autocomplete component", () => {
  it("Renders correctly", () => {
    const { container } = render(<Autocomplete onSetLocation={() => {}} />);
    const inputElement = container.querySelector("input");
    expect(inputElement).not.toBeNull();
  });
});
