"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useTranslation } from "react-i18next";
import i18Instance from "@/customHooks/i18Instance";
import { useState } from "react";
import { BsFiletypePdf } from "react-icons/bs";
i18Instance();

const page = () => {
  const { t } = useTranslation();

  const safetyTips = [
    {
      title: "",
      heading: "",
      para: (
        <div>
          <div className="flex justify-center py-10 gap-10  ">
            <img src="/navbarLogo.jpeg" alt="logo" className="w-16 h-16" />
            <div className="bg-white rounded-md gap-10 p-4 flex w-3/4 justify-between">
              <h1>Cyber Crime Safety</h1>
              <a href={`/safetytips/cybercrime.pdf`} target="_blank">
                <BsFiletypePdf size={30} />
              </a>
            </div>
          </div>

          <div className="flex justify-center py-10 gap-10 ">
            <img src="/navbarLogo.jpeg" alt="logo" className="w-16 h-16" />
            <div className="bg-white rounded-md gap-10 p-4 flex w-3/4 justify-between">
              <h1>Vehicle Theft Safety</h1>
              <a href={`/safetytips/vehicletheft.pdf`} target="_blank">
                <BsFiletypePdf size={30} />
              </a>
            </div>
          </div>

          <div className="flex justify-center py-10 gap-10 ">
            <img src="/navbarLogo.jpeg" alt="logo" className="w-16 h-16" />
            <div className="bg-white rounded-md gap-10 p-4 flex w-3/4 justify-between">
              <h1>Child Safety</h1>
              <a href={`/safetytips/childsafety.pdf`} target="_blank">
                <BsFiletypePdf size={30} />
              </a>
            </div>
          </div>

          <div className="flex justify-center py-10 gap-10 ">
            <img src="/navbarLogo.jpeg" alt="logo" className="w-16 h-16" />
            <div className="bg-white rounded-md gap-10 p-4 flex w-3/4 justify-between">
              <h1>Chain Snatching Safety</h1>
              <a href={`/safetytips/chainsnatching.pdf`} target="_blank">
                <BsFiletypePdf size={30} />
              </a>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Cyber Crime Safety",
      heading: "Ensuring Safety of Your Home",
      para: (
        <div>
          <h1>Hire qualified / experienced watchmans only.</h1>
          <h1>
            Check the antecedents / credentials of watchmans and domestic
            servants before hiring them. Insist on references from their
            previous employers. Furnish their full particulars to your police
            station in the format suggested by them.
          </h1>
          <h1>Always employ different watchmans for day and night duties</h1>
          <h1>
            Secretaries of Societies are advised to brief all the security-men /
            watch-men / lift-men about various aspects of security.
          </h1>
          <h1>
            It is important to inform the police about any suspicious happening
            or unclaimed object found in suspicious circumstances. Extend full
            cooperation to the police.
          </h1>
          <h1>
            A special register should be maintained in every society and kept in
            the custody of the chowkidar or in the society's office. Whenever
            Police officers visit the area, they should get an entry in such
            registers.
          </h1>
        </div>
      ),
    },
    {
      title: "Precaution at Work Place",
      heading: "Precaution at Work Place",
      para: (
        <div>
          <h1>
            1. Workplace precautions are those actions that are taken to reduce
            identified risks to an acceptable level. The most appropriate
            workplace precautions for any activity are decided by applying the
            following priorities:
          </h1>
          <h1 className="ms-5">If possible avoiding the risk altogether.</h1>
          <h1 className="ms-5">
            Where possible combating the risks at source.
          </h1>
          <h1 className="ms-5">
            Giving priority to measures that protect the whole workplace.
          </h1>
          <h1>
            2. A wide range of workplace precautions are available, some more
            effective than others.
          </h1>
          <h1>
            Typical workplace precautions include machinery guards, personal
            protective equipment (PPE) and safe systems of work. are able to
            provide guidance on appropriate workplace precautions for a range of
            regular work activities. In many instances, effective control of
            significant risks will only be achieved by implementing a proper
            method statement and/or a permit to work system that is appropriate
            to the task. Where a permit system is used, it must be followed.
          </h1>
        </div>
      ),
    },
    {
      title: "Vehicle Theft",
      heading: "Vehicle Theft",
      para: (
        <div>
          <h1 className="py-4">Vehicle Theft</h1>
          <h1 className="py-4">
            Every year, nearly 36,000 vehicles, which amount to Rs. 115 crore,
            are stolen in India out of these, only about 14,500 are traced,
            often in un-roadworthy conditions, with many components missing.
            These vehicles are stolen only because thieves are provided with the
            opportunity to steal them. Very often, cars are left improperly
            secured and unattended. It is only with the installation of anti -
            theft devices that a thief's attempts can be frustrated. Parking in
            a secure parking facility (garage, petrol pump, etc.) at night also
            safe-guards against theft. If such parking facilities are not
            available, parking in a well-lit area is the next best alternative.
            It is advisable to get the number of your car etched on your
            windscreens and window glasses. It helps the authorities to trace
            your car if stolen.
          </h1>
          <h1 className="mt-8 py-4">What Should You Do?</h1>
          <h1 className="py-4">
            Use securing devices like steering lock, clutch lock, brake lock,
            etc.
          </h1>
          <h1 className="py-4">Double-check all doors, including the boot.</h1>
          <h1 className="py-4">
            If possible, install loud alarm systems in your car, so that thieves
            can be discouraged even if they manage to break into your car.
          </h1>
          <h1 className="py-4">
            Try and use detachable music systems and take them with you whenever
            you park the car for a long time, so that there is no temptation for
            thieves to make a quick steal when they see expensive items in
            parked cars.
          </h1>
          <h1 className="py-4">
            Paint your car number on the front and rear end of the body, apart
            from the number plates. Ideally, have it etched on the windscreens
            and window glasses too. This prevents them from being misused by
            criminals using fake number plates.
          </h1>
          <h1 className="mt-8 py-4">What You Should Not Do?</h1>
          <h1 className="py-4">
            Never leave the vehicle door unlocked, nor the windows partially
            open. Make sure that the quarter glasses are properly secured.
          </h1>
          <h1 className="py-4">
            Do not leave valuables inside the car, even if it is locked, as this
            will attract thieves.
          </h1>
          <h1 className="py-4">
            Do not overdo extra fittings, as these tempt prospective thieves.
          </h1>
          <h1 className="py-4">
            Never leave the key dangling in the ignition.
          </h1>
        </div>
      ),
    },
    {
      title: "Women Safety",
      heading: "Women Safety (सेफ्टी_फर्स्ट!! (सुरक्षिततेचा मूलमंत्र))",
      para: (
        <div>
          <h1 className="py-6">
            1.एखादा वाईट प्रसंग, घटना अनोळखी_ठिकाणीच होते असं नाही. बरेचदा
            आपल्या पायाखालच्या, नेहमीच्या रस्त्यावरही होऊ शकते. Don't be
            Predictable!!! तीच वेळ, तोच रस्ता, तीच पार्किंगची जागा याचं रोजचं
            दळण दळू नका!! घरून बाहेर पडल्यावर १०० पावलं वाचवून तुम्ही एखाद्या
            ठिकाणी लवकर पोहोचत असाल तर आठवड्यातून २ दिवस लांबचा रस्ता घ्या. १०
            मिनिटं लवकर निघा. मध्ये एखादं काम असेल तर ते काम करून वाट वाकडी करून
            इच्छित स्थळी पोहोचा! ऑफिसच्या ठिकाणी कधीतरी वेगळ्या ठिकाणी गाडी
            लावा. थोडक्यात, घरच्यांव्यतिरिक्त कोणालाही तुमची वेळ, जागा याचे
            वेळापत्रक माहित असता कामा नये.
          </h1>
          <h1 className="py-6">
            2.कुठे निघालोय याची माहिती घरच्यांना प्रत्यक्ष, फोनवरून किंवा तेही
            शक्य नसेल तर Sms, Whatsapp वर कळवा.
          </h1>
          <h1 className="py-6">
            3.रस्त्यावरून चालताना किंवा सार्वजनिक ठिकाणी फोनवर खाजगी, वैयक्तिक
            बोलणे टाळा. कुठे जाणार आहात किंवा कुठे राहणार आहात याची माहिती
            द्यायची असेल तर text मेसेज पाठवा. फक्त भिंतीला कान नसतात तर तुमच्या
            आजूबाजूच्या सगळ्यांना असतात आणि काही लोकं याचा गैरवापर करू शकतात.
          </h1>
          <h1 className="py-6">
            4.उबर, ओला याचे लोकेशन शेअर करता येते. कारमध्ये बसल्यावर शक्य असेल
            तर घरच्यांबरोबर तुमचा रूट आवर्जून शेअर करा.
          </h1>
          <h1 className="py-6">
            5.फुकट किंवा कमी पैश्यांमध्ये कोणी तुम्हाला लिफ्ट देत असेल तरीही हा
            पर्याय निवडू नका. (ईस्थर अनुया हिची २०१४ सालची केस यावर बेतलेली
            आहे.)
          </h1>
          <h1 className="py-6">
            6.क्षुल्लक वाटणारी पण महत्त्वाची गोष्ट. बुक केलेल्या कारमधून प्रवास
            सुरु झाल्यावर मुली कानात गाणी लावून बिनधास्त झोपून जातात. कारमध्ये
            एकट्या प्रवास करत असाल तर काहीही करून जाग्या आणि सतर्क राहा. (सगळेच
            ड्रायव्हर्स वाईट असतात असे नाही, पण हलगर्जीपणा चांगला नाही!)
          </h1>
          <h1 className="py-6">
            7.फोन लवकर डिस्चार्ज होत असेल तर पोर्टेबल चार्जर सोबत घेऊन फिरा. तो
            वेळोवेळी चार्ज असेल याकडे लक्ष द्या. २५% बॅटरी असताना तसाच फोन घेऊन
            निघायची रिस्क घेऊ नका. २०% बॅटरी झाली तर पटकन उतरते आणि अगदी ५
            मिनिटांमध्येही फोन बंद पडू शकतो.
          </h1>
        </div>
      ),
    },
    {
      title: "Banking Precautions",
      heading: "Banking Precautions",
      para: (
        <div>
          <h1 className="py-6 font-medium">Banking Precautions</h1>
          <h1 className="py-6">
            Never introduce an unknown person for the purpose of opening an
            account in your Bank. Never encash cheques / drafts of an unknown
            person through your account. Do not keep your account in-operative
            for a long time. To avoid theft in postal transit or courier
            services and subsequent cheating, keep a track on the cheques /
            drafts / pay orders sent through post and courier services. As far
            as possible, bank transactions should be handled personally. Take
            care of your cheque books. Do not keep signed cheques in the drawer
            or any place where outsiders have an easy access. All bank
            transactions should be counter checked to ensure that deposited
            cheques have been realized. Monthly statements of your bank account
            should be invariably checked. At the time of withdrawal of cash, the
            account holder must physically check the cash. Never hand over the
            cash to a third person for counting.
          </h1>
          <h1 className="py-6 font-medium ">TO AVOID BOUNCING OF CHEQUES</h1>
          <h1 className="py-6">
            Insist for D.D. or Pay Orders if you are dealing with an unknown
            party. Postdated cheques should be avoided. If a cheque bounces, you
            should give a notice to the person within 15 days of such
            intimation. If you do not receive a reply, file a complaint in the
            court under section 138 of the Negotiable Instruments Act, 1981,
            where effective remedies are available to the public. All cases of
            bounced cheques may not be offences of cheating under the Indian
            Penal Code.
          </h1>
        </div>
      ),
    },
    {
      title: "A.T.M Safety Tips",
      heading: "A.T.M Safety Tips",
      para: (
        <div>
          <h1 className="py-6 font-medium">A.T.M Safety Tips</h1>
          <h1 className="py-6">
            Never introduce an unknown person for the purpose of opening an
            account in your Bank. Never encash cheques / drafts of an unknown
            person through your account. Do not keep your account in-operative
            for a long time. To avoid theft in postal transit or courier
            services and subsequent cheating, keep a track on the cheques /
            drafts / pay orders sent through post and courier services. As far
            as possible, bank transactions should be handled personally. Take
            care of your cheque books. Do not keep signed cheques in the drawer
            or any place where outsiders have an easy access. All bank
            transactions should be counter checked to ensure that deposited
            cheques have been realized. Monthly statements of your bank account
            should be invariably checked. At the time of withdrawal of cash, the
            account holder must physically check the cash. Never hand over the
            cash to a third person for counting.
          </h1>
          <h1 className="py-6 font-medium ">TO AVOID BOUNCING OF CHEQUES</h1>
          <h1 className="py-6">
            Insist for D.D. or Pay Orders if you are dealing with an unknown
            party. Postdated cheques should be avoided. If a cheque bounces, you
            should give a notice to the person within 15 days of such
            intimation. If you do not receive a reply, file a complaint in the
            court under section 138 of the Negotiable Instruments Act, 1981,
            where effective remedies are available to the public. All cases of
            bounced cheques may not be offences of cheating under the Indian
            Penal Code.
          </h1>
        </div>
      ),
    },
    {
      title: "Resident Safety",
      heading: "Resident Safety",
      para: (
        <div>
          <h1 className="py-6 font-medium">SAFETY TIPS FOR RESIDENTS :-</h1>
          <h1 className="py-6">
            1. Hire the qualified / experienced security guards only. 2. Check
            the antecedents / credentials of security guards and domestic
            servants before hiring them. Insist on references from their
            previous employers. Suggest them to furnish their full particulars
            to your police station in the format. Always employ different
            security guards for day and night duties 3. Secretaries of Societies
            are advised to brief all the security men/ chowkidars / lift men
            about various aspects of security. Some of these are. 4. To make an
            enquiry if a taxi or auto-rickshaw is seen parked inside the
            compound or outside the building for a long time. 5. To inform the
            police in case they find any vehicle parked inside the building (if
            ownership is not known) for a long time. 6. Secretaries of societies
            are advised to brief all residents on the following. 7. Whenever
            they employ a new servant, the local police station should be
            informed. His or her photographs, fingerprints and other details
            should be obtained and submitted to local police station. 8. They
            should be advised to install a door with iron bars inside the flat,
            superior quality lock and special eye lens on the main door.
            Ideally, interaction with strangers and vendors should be through
            the grilled door. High wattage light source with water proof cover
            outside the main door should be installed. 9. They should not keep
            huge amounts of cash, valuable ornaments etc., in the house. 10.
            They should avoid discussing money transactions and other important
            family matters in the presence of servants/ outsiders. 11. They
            should not humiliate servants on petty matters. Nor should they
            penalize them for small damages. 12. It is important to inform the
            police about any suspicious happening or unclaimed object found in
            suspicious circumstances. Extend full cooperation to the police. 13.
            A special register should be maintained in every society and kept in
            the custody of the chowkidar or in the society's office. Whenever
            Police officers visit the area, they should get an entry in such
            registers.
          </h1>
          <h1 className="py-6 font-medium text-center">
            IN CASE POLICEMEN ARE CHASING A CRIMINAL
          </h1>
          <h1 className="py-6">
            1. Give way to the police immediately 2. If possible, note down the
            number of the escaping vehicle and the identity of the occupants 3.
            Remember the entry and exit routes of the criminals.
          </h1>
        </div>
      ),
    },
    {
      title:
        "Precautions While Applying For New Passports And Seeking Jobs Outside India.",
      heading:
        "Precautions While Applying For New Passports And Seeking Jobs Outside India.",
      para: (
        <div>
          <h1 className="py-6 font-medium">
            Precautions while applying for new passports and seeking jobs
            outside India.
          </h1>
          <h1 className="py-6">
            While applying for a new passport, fill up the online application
            form www.passportindia.gov.in. website and pay the money by
            debit/credit Card/Challan. There are no authorized agents appointed
            by the Passport Authority. Passports cannot be SOLD. Touts may try
            it on you, but remember travelling on a bogus Passport is Illegal.
            Look for the registration number of the recruiting agents on all
            advertisements for jobs outside India. Insist on seeing the original
            registration certificate of the agent and check its validity before
            handing over your passport. Get your passport, valid visa, travel
            tickets and ensure completion of all immigration formalities before
            handing over full payment. Payment should be made only to the
            authorized agents and receipt thereof must always be obtained. The
            job seeker should know that the agent is bound to give employment to
            the candidate within 60 days from making the final payment. Prior
            agreement should be made regarding the type of job and terms of
            agreement should be gone through carefully. In the event of any foul
            play, the job seeker should immediately contact the local police
            station.
          </h1>
        </div>
      ),
    },
    {
      title: "Commercial Areas Safety Precautions",
      heading: "Commercial Areas Safety Precautions",
      para: (
        <div>
          <h1 className="py-6 font-medium">SAFETY TIPS FOR COMMERCIAL AREAS</h1>
          <h1 className="py-6">
            1. Hire security personnel from reputed agencies only. 2. Use
            transport for carrying all valuables. If you regularly carry money,
            or any other precious commodity, change the route and time randomly.
            3. Avoid cash payments as far as possible, especially in the
            presence of servants / outsiders 4. Do not talk loudly on the
            telephone (especially cellular phones) about money matters. 5. All
            security personnel, including lift men should be thoroughly briefed
            on various aspects of security. 6. Wherever possible use CCTV and
            other electronic alarm systems. 7. Inform the Police about any
            suspicious happening or unclaimed object lying for a long time.
            Extend full co- operation to the police.
          </h1>
        </div>
      ),
    },
    {
      title: "Physical Security Measure",
      heading: "Physical Security Measure",
      para: (
        <div>
          <h1 className="py-6 font-medium">
            SAFETY TIPS FOR PHYSICAL SECURITY
          </h1>
          <h1 className="py-6">
            Explosions and bomb-threat are a harsh reality in the current times.
            As the threat spreads to the life of common man, it becomes
            imperative for him to actively participate in dealing with it. No
            organization, including police can do, what collective
            responsibility can. Awareness and preparation are the key words in
            dealing with the threat, whether potential or real. If people at
            large understand and execute certain laid down guidelines, they can
            greatly reduce the potential of personal injury, property loss and
            trauma that accompanies bomb-threat. Most important of all, they can
            help to reduce panic, the most contagious of all the human reactions
            and the ultimate achievement of the person executing the
            bomb-threat. This brochure has been designed to give you an
            understanding of the practical steps to be taken by way of
            precaution and detailed procedure to be implemented when a
            bomb-threat has been given. This brochure is divided into two parts:
            The Prevention Plan deals with various steps to be taken for
            protection of property, personnel material against unauthorized
            entry, trespass, and damage, thus reducing the vulnerability of your
            organization to bomb-attacks. The Bomb-Threat Plan tells you how to
            respond to a bomb-threat, written or verbal, what to do before the
            police arrives to your help and how to help and co-ordinate with the
            police. In making this pamphlet available to you, we hope to help
            you better prepare to deal with bomb threats and the illegal use of
            explosives.
          </h1>

          <h1 className="py-6">
            What is a Bomb? Bombs are explosive devises. They can be constructed
            to look like almost anything and can be placed or delivered in any
            number of ways. (How we wish they all looked like the ones shown in
            movies, with fancy switches, colourful wires and a big watch hanging
            with the whole paraphernalia!)The only common denominator that
            exists among bombs is that they are designed to explode.
          </h1>
          <h1>
            Most bombs or as we call them IEDs (Improvised Explosive Devises)
            are handmade and are limited in their design only by the imagination
            of, and resources available to, the bomber. Remember, when looking
            for a bomb, suspect anything that looks unusual and out of place.
            The thumb-rule is, anything, unless it belongs to you or you know
            (not presume) about, may be a bomb. Simple! Leave it to the trained
            bomb technician to determine whether it is a bomb or not.
          </h1>
          <h1>
            The Prevention Plan Most establishments already have some planned or
            unplanned security in place. Locks on windows and doors, outside
            lights, etc., are all designed and installed to contribute toward
            the security and the protection of its occupants. This brochure is
            meant to suggest a systematic approach towards the security planning
            for your organization.
          </h1>
          <h1>
            In considering measures to increase security for your building or
            establishment, it is highly recommended that you perform a 'security
            audit' for your establishment. Don't be intimidated by the word. It
            merely involves thinking of the various opportunities your
            establishment offers to some one to come close enough to harm the
            occupants, or to plant some explosive device there. You may consider
            establishing a task force involving staff and security personnel
            working in your establishment for this purpose. There are various
            private organizations which may help you in this. In the case of any
            difficulty or help needed, please contact the nearest police
            station. We shall be happy to help you.
          </h1>
          <h1>
            There is no single security plan that is adaptable to all
            situations. The following recommendations are offered because they
            may contribute to reducing your vulnerability to bomb attacks.
          </h1>
          <h1>
            1. The exterior configuration of a building or facility is very
            important. Unfortunately, in most instances, the architect has given
            little or no consideration to security, particularly toward
            thwarting or discouraging a bomb attack. However, by the addition of
            fencing and lighting, and by controlling access, the vulnerability
            of a facility to a bomb attack can be reduced significantly. 2.
            Bombs being delivered by car or left in a car are a grave reality.
            Visitors parking should be restricted, if possible, to 300 feet from
            your building or any building in a complex. If restricted parking is
            not feasible, properly identified employee vehicles should be parked
            closest to your facility and visitor vehicles parked at a distance.
            3. Heavy shrubs and vines should be kept close to the ground to
            reduce their potential to conceal criminals or bombs. Window boxes
            and planters are perfect receptacles for the bomber. Unless there is
            an absolute requirement for such ornamentation, window boxes and
            planters are better removed. If they must remain, security personnel
            should be briefed to check them regularly. 4. A highly visible
            security man can be a significant deterrent. Even if this "patrol"
            is only one security guard/night guard, he can be optimally utilized
            outside the building. Consider the installation of closed circuit
            television cameras that cover exterior building perimeters. Have an
            adequate burglar alarm system installed. Post signs indicating that
            such a system is in place. 5. Entrance/exit doors may be given a
            second glance. Solid wood or sheet metal faced doors provide extra
            integrity that a hollow-core wooden door cannot provide. Bars,
            grates, heavy mesh screens, or steel shutters over windows offer
            good protection from otherwise unwanted entry. Floor vents,
            transoms, and skylights should also be covered. 6. Controls should
            be established for positively identifying personnel who are
            authorized access to critical areas. These controls should extend to
            the inspection of all packages and materials being taken into
            critical areas. 7. Security and maintenance personnel should be
            alert for people who act in a suspicious manner, as well as objects,
            items, or parcels which look out of place or suspicious.
            Surveillance should be established to include potential hiding
            places (e.g., stairwells, rest rooms, and any vacant office space)
            for unwanted individuals. 8. Doors or access ways to such areas as
            boiler rooms, mail rooms, computer areas, switchboards, and elevator
            control rooms should remain locked when not in use. It is important
            to establish a procedure for the accountability of keys. 9.
            Entrances and exits can be modified with a minimal expenditure to
            channel all visitors through a reception desk. Individuals entering
            the building would be required to sign a register indicating the
            name and room number of the person whom they wish to visit. A system
            for signing out when the individual departs could be integrated into
            this procedure. 10. Maintenance of good public relations is
            important for every organization. However, please remember that
            ensuring security for your organization and your patrons is vital.
            And YOU are responsible for it. The threatened use of explosives
            necessitates that in the interest of safety and security, some
            inconvenience may have to be imposed on visitors to public
            buildings. Fortunately, the public is becoming more accustomed to
            routine security checks and will readily accept these minor
            inconveniences. 11. Maintenance of good public relations is
            important for every organization. However, please remember that
            ensuring security for your organization and your patrons is vital.
            And YOU are responsible for it. The threatened use of explosives
            necessitates that in the interest of safety and security, some
            inconvenience may have to be imposed on visitors to public
            buildings. Fortunately, the public is becoming more accustomed to
            routine security checks and will readily accept these minor
            inconveniences. The Bomb-Threat Plan It is easy to lose nerve when
            one picks up the phone and receives a grave voice telling that his
            place is going to be blown off any minute. It is very important to
            be prepared with an organized plan to deal with such a situation.
            This will help you to tide over any threat situation without
            unnecessary panic, confusion, and chaos in your establishment.
          </h1>
          <h1 className="font-medium">RESPONDING TO A BOMB-THREATS</h1>
          <h1>
            1. All your phones must have caller ID system. Having a facility for
            automatic recording of calls is not a bad idea. Probability of being
            caught is the biggest deterrent for any prankster. Let your
            employees/workers/students know that you have state-of-art machines
            fitted at your central phone consol. It helps. 2. Treat all threat
            calls as important. Just because statistics suggest that most of the
            bomb-threats are hoax, it does give us any room for complacency. 3.
            Instruct all personnel, especially those at the telephone
            switchboard, in what to do if a bomb-threat is received. A calm
            response to the bomb threat caller could result in obtaining
            additional information. This is especially true if the caller is a
            genuine one and wishes to avoid injuries or deaths. If told that the
            building is occupied or cannot be evacuated in time, the caller may
            be willing to give more specific information on the bomb's location,
            components, or method of initiation. 4. The bomb threat caller is
            the best source of information about the bomb. When a bomb threat is
            called in: Keep the caller on the line as long as possible. Ask
            him/her to repeat the message. Record every word spoken by the
            person. If the caller does not indicate the location of the bomb or
            the time of possible detonation, ask him/her for this information.
            Inform the caller that the building is occupied and the detonation
            of a bomb could result in death or serious injury to many innocent
            people. Pay particular attention to background noises, such as
            motors running, music playing, and any other noise which may give a
            clue as to the location of the caller. Listen closely to the voice
            (male, female), voice quality (calm, excited), accents, and speech
            impediments. Immediately after the caller hangs up, report the
            threat to the person designated by management to receive such
            information. Report the information immediately to the police. Never
            think that you will be called an alarmist. Remember A533; every call
            is true, unless otherwise proven. Remain available. Police will want
            to interview you. 5. When a written threat is received, save all
            materials, including any envelope or container. Once the message is
            recognized as a bomb threat, further unnecessary handling should be
            avoided. Every possible effort must be made to retain evidence such
            as fingerprints, handwriting or typewriting, paper, and postal
            marks. These will prove essential in tracing the threat and
            identifying the writer. Summary: This pamphlet serves only as a
            guide and is not intended to be a comprehensive manual for securing
            your establishment or preparing you from any bomb-threat. There can
            be various different scenarios and situations. In all such cases,
            rule of thumb is: Remain calm and use your common sense. Police is
            always there to help you. Be prepared. Be safe.
          </h1>
        </div>
      ),
    },
    {
      title: "Fraud Money Schemes",
      heading: "Fraud Money Schemes",
      para: (
        <div>
          <h1 className="py-6 font-medium">SAFETY TIPS: FRAUD MONEY SCHEMES</h1>
          <h1 className="py-6 font-medium">WHAT THEY SAY</h1>
          <h1 className="py-6">
            1. Double your money in two months or less. 2. Post-dated cheques as
            a guarantee for the same. 3. Claim they do it by investing in some
            wonder projects or plantations. 4. Huge sums of money by being a
            part of the gift chain i.e. you gift a certain amount of money to
            two people, and then find two people who will enter the chain by
            gifting you the sum. They in turn will get two more subscribers, and
            so on. 5. As the scheme is run by a registered company, it is
            absolutely safe.
          </h1>
          <h1 className="py-6 font-medium ">REALITY</h1>
          <h1 className="py-6">
            1. All schemes offering high returns of double money within two
            months or such short spans have no legal sanction, nor they are
            reliable. 2. Post-dated cheques is not a guaranteed payment device,
            as they could bounce when you finally present them. 3. There are no
            projects, especially agriculture based, which can give returns in
            less than a year. In fact, tree plantations take at least 10 years
            to mature. 4. Gift schemes and chains are an offence under the Prize
            Chits and Money Circulation Schemes (Banning) Act of 1978. 5. Even
            registered companies are not allowed to promote and run any such
            schemes
          </h1>
        </div>
      ),
    },
    {
      title: "Property Purchase",
      heading: "Property Purchase",
      para: (
        <div>
          <h1 className="py-6 font-medium text-center">
            SAFETY TIPS FOR PROPERTY PURCHASE INSTRUCTIONS TO MEMBERS OF PUBLIC
            ABOUT CO-OP HSG. SOCIETIES AND HOW TO PREVENT CHEATING AT THE TIME
            OF PURCHASING FLATS.
          </h1>
          <h1 className="py-6 font-medium">
            1. VERIFICATION OF OWNERSHIP OF LAND.
          </h1>
          <h1 className="py-6">
            Ensure from the City Survey office that the developer has been
            granted the N.O.C and the land is Non-Agricultural (N.A.) Types of
            land Where to verify from BMC Land The concerned Ward office Govt.
            land Verification from the Collector's office MHADA land
            Verification from MHADA, Bandra (E) B.P.T. land Estate Manager,
            Mumbai Port Trust, Ballard Pier Salt land Commissioner of Salt,
            Ballard Pier Trust land President of the concerned Trust, and
            charity Commissioner, Worli For clear title, 7/12 (Sat Bara) Extract
            to be verified from the "Talathi" OR "Tahasildar" office. For Land
            in Dispute or in legal litigation - approach "Bailiff" or
            "Arbitrator" from High Court.
          </h1>
          <h1 className="py-6 font-medium text-center">
            2. NOCs OF VARIOUS AUTHORITIES
          </h1>
          <h1 className="py-6">
            Fire Brigade Especially for high rise buildings Traffic Dept. Mumbai
            Police. BEST/BSES For electricity supply. IAAI Building in airport
            vicinity. Railway Near the railway track BMC For drainage, water
            supply, commencement certificate
          </h1>
          <h1 className="py-6 font-medium text-center">
            3. TO CHECK THE LEGALITY OF THE CONSTRUCTION
          </h1>
          <h1>
            Checking of Commencement Certificate or Intimation of Disapproval by
            the Municipal authorities. Contact the Builder / Developer for
          </h1>
          <h1>
            Plans submitted by the architect Notice in Newspaper for clearance
            of title of the land Certificate from solicitor Confirm whether
            Residential or Commercial F.S.I. permitted, and utilized by the
            builder Percentage of reservation made for Government flats or any
            special category Whether covered under Urban Land Ceiling
            Reservation
          </h1>
          <h1 className="py-6 font-medium text-center">
            4. ENTERING INTO AGREEMENT
          </h1>
          <h1>
            The agreement for sale should be properly signed by the concerned
            parties The agreement must be attested by two witnesses Only the
            agreement registered with the Collector will be treated as the
            "legal document" Stamp Duty should be paid only at the Collector's
            Office at the time of registration of the agreement
          </h1>
          <h1 className="py-6 font-medium text-center">5. MODE OF PAYMENT</h1>
          <h1>
            Cheque is the safest way of payment. If paid by cash, insist on
            receipt. Repayment of loans obtained from the Financial Institutions
            should be made only to the concerned Institution and not to the
            builder or developer. So Here's wishing you a very happy year ahead,
            And all the bad luck to the cheats.
          </h1>
        </div>
      ),
    },
    {
      title: "Emergency Situation",
      heading: "Emergency Situation",
      para: (
        <div>
          <h1 className="py-6 font-medium text-center">EMERGENCY SITUATION</h1>
          <h1 className="py-6 font-medium text-center">
            IF FIRING OCCURS WHILE YOU ARE AT WORK OR WALKING ON A STREET.
          </h1>
          <h1 className="py-6">
            Lie down onto the ground immediately. Do not show any unwanted
            curiosity. The criminal may feel threatened and shoot at you. When
            possible, move to a safer place, slowly, without drawing attention
            to yourself. Take cover behind solid objects like a car or a wall.
            If you can see the criminals from your hiding place, try to note and
            memorize their distinguishing features. If you are out of sight of
            the criminals, call up 100 and inform the Police. If you are within
            earshot, try to remember their conversation. Do not disturb the
            scene of the crime.
          </h1>
          <h1 className="py-6 font-medium text-center ">
            IN CASE POLICEMEN ARE CHASING A CRIMINAL.
          </h1>
          <h1 className="py-6">
            1. Give way to the police immediately 2. If possible, note down the
            number of the escaping vehicle and the identity of the occupants 3.
            Remember the entry and exit routes of the criminals
          </h1>
        </div>
      ),
    },
    {
      title: "Senior Citizen Safety",
      heading: "Senior Citizen Safety",
      para: (
        <div>
          <h1 className="py-6 font-medium text-center">
            SAFETY TIPS FOR SENIOR CITIZEN
          </h1>

          <h1 className="py-6">
            Majority of the offenses committed by the persons are known to the
            victims - servant, watchman, craftsman etc. Criminals are generally
            not on police record. Database of elderly people staying alone in
            the jurisdictions of various Police Stations are compiled with poor
            response. Servants information not provided to Police - fear of
            loosing servants
          </h1>
          <h1 className="py-6 font-medium text-center ">
            DO'S AND DON'T S FOR YOU:
          </h1>
          <h1 className="py-6">
            Employ a servant after verifying his real name, native address with
            the help of the nearest Police Station or through the security
            wardens of Dignity Foundation and AGNI
          </h1>
          <h1>
            Never discuss financial matters in front of your servant. It is
            always safe to deposit your valuables in safe deposit vault of any
            Bank. Treat your servant in a humane way. Do not allow any of the
            relatives or friends of your servant to visit your house. If at all
            he has any frequent visitor, get his antecedents checked from police
            and try to keep the number of such persons. Make your neighbor know
            of you being staying alone. The Housing Society also needs to know
            this. Use of modern security gadgets is always advantageous. Door
            alarm, electronic eye bell etc. is available in market. Consult the
            professionals in this regard. Install a peephole in your front door
            and always check the identification of strangers before you let them
            inside your home. Never leave spare keys in open or in the
            conventional hiding places. Verify the identity of any repairmen.
            Use the telephone number listed in the phone book, not the one
            suggested by them. Inform your society about the unacquainted
            visitors, so that their identity could be checked at the very gate
            of the society. A well-designed electronic alarm system attached to
            the office of your Housing. Society or to the watchman's cabin would
            be advisable so as to send alarm signals to all simultaneously. When
            you admit a workman or a salesman, do not leave him alone at any
            time.
          </h1>
        </div>
      ),
    },
  ];

  const [selectSafety, setselectSafety] = useState("");
  const [isDropDownOpen, setisDropDownOpen] = useState(false);

  const toggleDropdown = () => {
    setisDropDownOpen(!isDropDownOpen);
  };

  return (
    <>
      <div className="">
        <Navbar />
        <div className="bg-[#e9e4ce49] py-10">
          <div className="text-5xl font-bold leading-9 text-center text-[#15233E]">
            <h1 className="pt-14 font-headingFont underline">
              {t("safety_tips")}
            </h1>
          </div>

          <div className="w-full flex justify-center my-10">
            <div className="relative w-[60%] md:w-[40%] bg-[#e9e4ce49] border-[1px] border-[#E7581A] rounded-2xl py-2 px-4 z-20">
              <button
                onClick={toggleDropdown}
                className="dropdown-toggle text-[#E7581A] flex justify-between w-full"
              >
                <span title="Select Category">Select Category</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-4 w-4 text-[#E7581A] transition-transform ${
                    toggleDropdown ? "" : "rotate-180"
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isDropDownOpen && (
                <div className="absolute top-12 left-0 bg-white w-full border-[1px] border-[#E7581A] rounded-2xl py-2 px-4 z-20">
                  {safetyTips.map((titles, i) => (
                    <ul key={i} className="dropdown-menu">
                      <li
                        onClick={() => {
                          setselectSafety(titles.title);
                          setisDropDownOpen(!isDropDownOpen);
                        }}
                        className="cursor-pointer hover:text-[#E7581A]"
                        title={titles.title}
                      >
                        {titles.title}
                      </li>
                    </ul>
                  ))}
                </div>
              )}
            </div>
          </div>

          {safetyTips.map((data, i) => (
            <div>
              {data.title == selectSafety ? (
                <div>
                  <h1 className="my-5 text-2xl font-extrabold text-center">
                    {data.heading}
                  </h1>
                  <div className="text[#15233E] md:mx-20 md:ml-44 mx-5 text-left bg-lime-200 p-5 rounded-lg">
                    {data.para}
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          ))}
        </div>

        <div className=" md:mt-[0rem]">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default page;
