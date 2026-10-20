import SettingSidebar from "../../../src/components/settings/SettingSidebar";
export default function SettingLayout({ children }) {
  return (
    <div className="flex gap-5.75">
      <SettingSidebar />
      <main className="">{children}</main>
    </div>
  );
}
