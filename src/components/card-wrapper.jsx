"use client";
import { 
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import Social from '@/components/auth/social';
import BackButton from '@/components/auth/back-button';

const CardWrapper = ({
  children,
  title,
  headerLabel,
  backButtonLabel,
  backButtonHref,
  showSocialLogin
}) => {
  return (
    <Card className="w-[500px] shadow-md">
      <CardHeader>
        {title && <p className="text-[royalblue] text-[28px] font-bold flex relative pl-3">{title}</p>}
        <h1 className="text-2xl font-bold">{headerLabel}</h1>
      </CardHeader>
      <CardContent>
        {children}
      </CardContent>
      {showSocialLogin && (
        <CardFooter>
          <Social />
        </CardFooter>
      )}
      <CardFooter>
        <BackButton
          label={backButtonLabel}
          href={backButtonHref}
        />
      </CardFooter>
    </Card>
  )
}

export default CardWrapper;