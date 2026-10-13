import AcademicNav from "../../../src/components/academicManagement/AcademicNav";
export default function AcademicManagementLayout({ children }) {
  return (
    <div>
      <AcademicNav />
      {children}
    </div>
  );
}
