import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

import CardWrapper from "@/components/card-wrapper";

const ErrorCard = () => {
  return (
    <CardWrapper
      headerLabel="Oops! Something went wrong!"
      backButtonHref="/login"
      backButtonLabel="Back to login"
    >
      <div className="w-full flex justify-center items-center">
      <ExclamationTriangleIcon className="text-destructive" />
      </div>
    </CardWrapper>
  );
};

export default ErrorCard;