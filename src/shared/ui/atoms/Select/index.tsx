import { ComponentPropsWithoutRef, forwardRef } from "react";
import "rc-select/assets/index.css";
import { BaseSelectRef, Option } from "rc-select";
import { RcSelectDropdownStyled, RcSelectStyled } from "./styled";
type SelectProps = ComponentPropsWithoutRef<typeof RcSelectStyled>;
export const Select = forwardRef<BaseSelectRef, SelectProps>(
  ({ options, ...props }, ref) => {
    return (
      <RcSelectStyled
        ref={ref}
        {...props}
        dropdownStyle={{
          borderRadius: "0.375rem",
          border: "none",
          overflow: "hidden",
        }}
        menuItemSelectedIcon={null}
        dropdownRender={(menu) => {
          return <RcSelectDropdownStyled>{menu}</RcSelectDropdownStyled>;
        }}
      >
        {options?.map((option) => {
          return (
            <Option key={option.value} value={option.value}>
              {option.label}
            </Option>
          );
        })}
      </RcSelectStyled>
    );
  }
);
