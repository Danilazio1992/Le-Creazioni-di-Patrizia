import AccountMainSide from "../Components/AccountMainSide";
import AccountSidebar from "../Components/AccountSidebar";
function Account() {
  return (
    <div className="flex flex-row gap-2">
      <AccountSidebar />
      <AccountMainSide />
    </div>
  );
}

export default Account;
