
import { PageHeader } from '@/layout/Breadcrumb'
import Contact from "@/components/Contact";
import NavOne from "@/components/NavOne";
import ContactForm from "@/components/ContactForm";

const metaTitle = 'Contact'
export const metadata = {
    title: metaTitle + ' | JIEAS',
    openGraph: {
        title: metaTitle + ' | JIEAS'
    }
}
export default function Page() {
    return <>
            <NavOne />
            <PageHeader title="Contact" />
            <Contact />
            <ContactForm />
    </>;
}
