import React from "react";
import Button from "@material-ui/core/Button";

export default function SubmitButton({ errors, dirty, isSubmitting }) {
  const numErrors = Object.keys(errors).length;
  const isSubmittable = numErrors === 0 && dirty && !isSubmitting;
  return (
    <Button
      type="submit"
      disabled={!isSubmittable}
      color="primary"
      variant="contained"
    >
      Submit
    </Button>
  );
}
