"use client";

import ContactForm from "./parts/contactForm";
import Title1 from "./parts/title1";
import { Card } from "./ui/card";

export default function Contact() {
    return(
        <div className="mt-[100px] mb-24">
            <Title1 title="Contact" />
            <Card className="rounded-sm shadow-2xl p-6" style={{background: '#2F2E3A'}}>
                <ContactForm />
            </Card>    
        </div>
    );
}