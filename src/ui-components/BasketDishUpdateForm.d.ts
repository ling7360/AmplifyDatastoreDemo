/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { BasketDish } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type BasketDishUpdateFormInputValues = {
    quantity?: number;
};
export declare type BasketDishUpdateFormValidationValues = {
    quantity?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BasketDishUpdateFormOverridesProps = {
    BasketDishUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    quantity?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BasketDishUpdateFormProps = React.PropsWithChildren<{
    overrides?: BasketDishUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    basketDish?: BasketDish;
    onSubmit?: (fields: BasketDishUpdateFormInputValues) => BasketDishUpdateFormInputValues;
    onSuccess?: (fields: BasketDishUpdateFormInputValues) => void;
    onError?: (fields: BasketDishUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BasketDishUpdateFormInputValues) => BasketDishUpdateFormInputValues;
    onValidate?: BasketDishUpdateFormValidationValues;
} & React.CSSProperties>;
export default function BasketDishUpdateForm(props: BasketDishUpdateFormProps): React.ReactElement;
