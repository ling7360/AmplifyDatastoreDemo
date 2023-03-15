/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type BasketDishCreateFormInputValues = {
    quantity?: number;
};
export declare type BasketDishCreateFormValidationValues = {
    quantity?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BasketDishCreateFormOverridesProps = {
    BasketDishCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    quantity?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BasketDishCreateFormProps = React.PropsWithChildren<{
    overrides?: BasketDishCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: BasketDishCreateFormInputValues) => BasketDishCreateFormInputValues;
    onSuccess?: (fields: BasketDishCreateFormInputValues) => void;
    onError?: (fields: BasketDishCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BasketDishCreateFormInputValues) => BasketDishCreateFormInputValues;
    onValidate?: BasketDishCreateFormValidationValues;
} & React.CSSProperties>;
export default function BasketDishCreateForm(props: BasketDishCreateFormProps): React.ReactElement;
