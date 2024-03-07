import LayoutContainer from "@/components/Layout";
import FormRegister from "@/components/form/FormRegister";
import LayoutForm from "@/components/form/Layout";

const Page = () => {
  return (
    <LayoutContainer>
      <LayoutForm>
        <FormRegister />
      </LayoutForm>
    </LayoutContainer>
  );
};

export default Page;
