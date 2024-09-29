import { auth } from "@/auth";
import { signOut } from "@/auth"

const Data = async () => {
  const session = await auth();

  return (
    <>
    <form action={ async () =>  {
      "use server";
      await signOut();
    } }>
      <div>{JSON.stringify(session)}</div>
      <button type="submit">Sign out</button>
      

    </form>
    </>
  )
}

export default Data;