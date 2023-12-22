import FooterSectionWhite from "@/components/footer-section-white"
import HeaderSection from "@/components/header-section"
import PurposeSection from "@/components/purpose-section"

export default function Page() {
    return (
        <>
            <HeaderSection />
            <div className="min-h-viewport-minus-sections">
                <PurposeSection />
            </div>
            <FooterSectionWhite />
        </>
    )
  }