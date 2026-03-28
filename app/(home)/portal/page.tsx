import ICOBreach from "@/components/portal/ico-breach";
import ICORegulations from "@/components/portal/ico-regulations";
import InstallationCompanies from "@/components/portal/installation-companies";
import SectionHeader from "@/components/shared/section-header";

export default function PortalPage() {
  return (
    <section>
      <div className='bg-background pt-48 lg:pt-70 px-6 lg:px-25 py-15 '>
        <SectionHeader
          title='Secure Installer Platform'
          titleClassName='text-start text-white text-[48px] !lg:text-[64px]'
        />
        <div className='flex flex-col gap-y-6 text-base font-medium max-w-189'>
          <p className='text-(--text-muted-foreground) text-[18px] lg:text-[21px]'>
            ICO-Compliant Document Management, Instant IBG Generation &
            Centralized Compliance Workflows
          </p>
          <p className='text-(--text-muted-foreground) text-[18px] lg:text-[21px]'>
            A centralized, audit-ready system that transforms chaotic paperwork
            into structured, compliant project records — accessible anytime,
            from anywhere.
          </p>
        </div>
      </div>
      <InstallationCompanies />
      <ICORegulations />
      <ICOBreach />
    </section>
  );
}
