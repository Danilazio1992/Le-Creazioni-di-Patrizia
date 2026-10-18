import AccountMainSide from "../Components/AccountMainSide";
import AccountSidebar from "../Components/AccountSidebar";

function Account() {
  return (
    <div className="flex flex-row gap-2 h-full w-full">
      <AccountSidebar />
      <AccountMainSide />
    </div>
  );
}

export default Account;
