"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useTranslation } from "react-i18next";
import i18Instance from "@/customHooks/i18Instance";
import { useState } from "react";

i18Instance();

const page = () => {
  const { t } = useTranslation();

  const faq = [
    {
      title: "ARMS LICENSE",
      content: [
        {
          qstn: " 1) How does one procure a new Arms License?",
          answer:
            "By submitting an application in form 'A' with Rs. 10/- Court fees stamp.",
        },
        {
          qstn: "How much time it takes to get a new Arms License?",
          answer:
            "About 2 months after the application is submitted (provided all the documents are in order)",
        },
        {
          qstn: "2) What is the procedure to procure a New Arms License?",
          answer:
            "The application form is available in the Pimpri Chinchwad Police Commissionerate or can be downloaded from this site. Submit it with relevant documents to the office of the Police commissioner Pimpri Chinchwad. After that concerned Police station makes an enquiry and submits the report to the Zonal DCP in Commissionerate and SPs in districts. The applicants are then interviewed by the DCP or DM (as the case may be). Once convinced, the licensing authority (CP or DM) issues the license.",
        },
        {
          qstn: "3) Which documents are needed for obtaining a new Arms License?",
          answer: (
            <div>
              <h1>1. Copy of Ration card</h1>
              <h1>2. Election card</h1>
              <h1>
                3. Last 3 year's I.T. Returns /chalan copy/assessment orders
              </h1>
              <h1>
                4. Two character certificates from the responsible citizens from
                your locality
              </h1>
              <h1>5. Physical fitness certificate</h1>
              <h1>
                6. Proof of Educational Qualifications (self attested copies of
                certificates. Original should not be submitted alongwith
                application).
              </h1>
              <h1>
                7. Proof of age (Birth Certificate/school leaving certificate)
              </h1>
              <h1>
                8. supporting documents to justify the need for holding the arm
                for security or for sports etc.
              </h1>
              <h1>
                9.Proof of address - Light Bill, Ration Card, Index-II, Property
                Tax Bill, Rent agreement.
              </h1>
              <h1>
                10. If Businessman, he should submit Business Registration
                Certificate/Shop Act/Other document of Business information.
              </h1>
            </div>
          ),
        },
        {
          qstn: "4) How an Arms license is renewed?",
          answer:
            "Licensee should fill-in the renewal form and affix Rs. 5/- Court fees stamp thereupon. The licensee should produce his weapon and license for inspection at the time of renewal and pay the renewal fees. Renewal will be done after inquiry from concerned police station and the necessary noting about renewal will be made in the license.",
        },
        {
          qstn: "5) My license has expired three months back. What should I do?",
          answer:
            "Fill up the renewal from, produce the weapon for inspection along with the license. You have to pay late fee Rs.2000/-along with renewal fee and thereafter, the license will be renewed on satisfaction of the issuing authority about the delay.",
        },
        {
          qstn: "6) My license has expired more than a year back, what should I do?",
          answer:
            "Produce the weapon for inspection before the licensing authority along with the renewal form. Submit your Explanation for the delay preferably with the documentary support for the same. You will be issued with a Show Cause Notice. Submit your reply within 15 days. The issue will be decided by the licensing authority on merits of the case, and the decision will be communicated to you by letter, through the concerned Police station. Also you have to pay late Fee along with regular renewal fee.",
        },
        {
          qstn: "7) License holder was out of station and hence could not renew the license in time. What is the remedy?",
          answer: (
            <div>
              <h1>1. Deposit the weapon at the nearest Police station</h1>
              <h1>2. Obtain receipt for the same</h1>
              <h1>
                3. Fill up the renewal form as an agent of the license holder
                and submit the same.
              </h1>
              <h1>
                4. When the license holder returns, direct him to the office of
                licensing authority for renewal of his arms license, as
                explained above.
              </h1>
            </div>
          ),
        },
        {
          qstn: "8) How should I obtain a T.J.P. (Temporary Journey Permit)?",
          answer: (
            <div>
              <h1>
                1. Submit an application as per the format (TJP - Temporary
                Journey Permit) with Rs. 5/- Court Fees Stamp.
              </h1>
              <h1>2. Attach a copy of the license.</h1>
              <h1>
                3. Next day, pay a fee of Rs. 500/- for one weapon. If approved,
                your TJP will be issued on the next day.
              </h1>
              <h1>
                4. TJP is only valid for 30 days and is subject to local
                restrictions imposed by the local authority
              </h1>
            </div>
          ),
        },
        {
          qstn: "9) How do I get a license for property protection (Per-Pro Basis)?",
          answer:
            "License for property protection is granted on Per-Pro basis. The procedure is same as that of obtaining a new license.",
        },
        {
          qstn: "10) My father/uncle/husband/ relative was a license holder. He expired and now the license or the weapon is in my possession. What should I do ?",
          answer: (
            <div>
              <h1>
                1. You have to deposit the weapon and the original license (with
                ammunition) for safe custody at the nearest police station. A
                safe custody receipt will be issued to you.
              </h1>
              <h1>
                2. If you want to retain the weapon, submit your application for
                a new arms license in form A
              </h1>
              <h1>3. Attach copy of death certificate with application.</h1>
              <h1>
                4. The weapon can be kept in safe custody for one year. Charges
                for safe custody are @ Rs.50/- for per year.
              </h1>
              <h1>
                5. Procedure for issuing a new license is same as explained
                above.
              </h1>
              <h1>
                6. Please remember that grant of new license depends on your
                eligibility.
              </h1>
            </div>
          ),
        },
        {
          qstn: "11) My father/relative is old. He wishes to give me his weapon. What is the procedure?",
          answer: (
            <div>
              <h1>1. Make an application for arms license in form A.</h1>
              <h1>
                2. Attach a consent letter of the license holder with an
                affidavit on Rs. 500/- stamp paper.
              </h1>
              <h1>
                3. Attach NOC from all legal heirs on a Rs.500/- stamp paper,
                duly notarized.
              </h1>
              <h1>
                4. The remaining procedure is same as for procuring a new
                license.
              </h1>
              <h1>
                5. Please remember, grant of license depends upon your
                eligibility, and not on the wishes of donor.
              </h1>
            </div>
          ),
        },
        {
          qstn: "12) My All India Arms License was issued in another State. I want it to be registered/renewed in Maharashtra. What should I do?",
          answer: (
            <div>
              <h1>
                1. Submit an application in prescribed form for re-registration
                to the licensing authority (C.P./D.M.).
              </h1>
              <h1>2. Attach a copy of the arms license.</h1>
              <h1>3. Attach residential proof.</h1>
              <h1>
                4. NOC from the original licensing authority should also be
                attached. This NOC produced by the applicant is liable for a
                recheck from the concerned authorities directly.
              </h1>
              <h1>
                5. A Police station report with remarks from the Zonal DCP/SP
                should also be attached. On receiving the NOC and remarks,
                decision shall be taken by the licensing authority about
                re-registration.
              </h1>
            </div>
          ),
        },
        {
          qstn: "13) I want to make my license issued for one city, valid in the whole of Maharashtra. What is the procedure?",
          answer: (
            <div>
              <h1>
                1. Make an application, explaining the reasons for your request,
                on a plain paper with Rs.5/- court fees stamp; to the licensing
                authority.
              </h1>
              <h1>2. Attach a copy of Arms license.</h1>
              <h1>
                3. The application will be sent to the police station (having
                jurisdiction over the area of your place of residence) for
                enquiry.
              </h1>
              <h1>
                4. On receipt of Police station report, you will be called for
                an interview.
              </h1>
              <h1>
                5. The decision will be conveyed to you in writing through the
                Police station.
              </h1>
            </div>
          ),
        },
        {
          qstn: "14) I want to make my license valid in the whole of India. What should I do?",
          answer: (
            <div>
              <h1>
                1.Submit an application (explaining the reasons) to the
                Government of Maharashtra, Pol-IX, Home Department, Mantralaya,
                Mumbai with a copy of the license.
              </h1>
              <h1>
                2. The application will be sent to the Police station/Unit for
                an enquiry,
              </h1>
              <h1>
                3. On receipt of the report, you will be interviewed by the
                appropriate authority.
              </h1>
              <h1>
                4. The Government of Maharashtra will take the decision on
                merits and you will be informed accordingly.
              </h1>
            </div>
          ),
        },
        {
          qstn: "15) I want to sell my weapon. What is the procedure?",
          answer: (
            <div>
              <h1>
                1.Submit an application (on plain paper) with Rs.500/- court
                fees stamp and attach a copy of your license.
              </h1>
              <h1>
                2. Inform Arms and Ammunition Branch/DM with relevant documents.
              </h1>
              <h1>
                3. If all documents are in order, sale permission will be
                issued.
              </h1>
            </div>
          ),
        },
      ],
    },
    {
      title: "PASSPORT/VISA",
      content: [
        {
          qstn: "1) What is a Passport?",
          answer:
            "'Passport' is an official document, issued by competent authority on behalf of a sovereign nation state, certifying the holders identity and nationality, & authorizing the holder to travel abroad.",
        },
        {
          qstn: "2) Where is the passport application form available?",
          answer:
            "Passport application forms are available at Regional Passport Offices. They are also available at http://passport.nic.in",
        },
        {
          qstn: "3) What are the fees for issuing a passport ?",
          answer:
            "1. Fresh Passport ( 36 pages ) of 10 years validity- Rs. 1,000.2. Fresh Passport ( 60 pages ) of 10 years validity - Rs. 1,500.3. Fresh Passport for Minors ( Below 15 years of Age ) of 5 years validity - Rs.1000(Cash either by Bank Draft in favor of the Passport Office or in Cash. In case of D.D. full name of the applicant and application number to be written on the reverse of the draft.)4.Below 4 years-Rs 9005.Between 4 years to 15 years - Rs- 1000",
        },
        {
          qstn: "4) What is the procedure if the passport is lost?",
          answer:
            "A complaint should be lodged in the concerned local police station and thereafter, an application for a new passport should be submitted.",
        },
        {
          qstn: "5) How many days are required for police verification?",
          answer:
            " The verification procedure takes about 3 weeks from the receipt of the application.",
        },
        {
          qstn: "6) What are the documents required to apply for a passport ?",
          answer:
            "Attach two copies of the following documents:1. Applicant's Ration Card or any of the following documents.a) Telephone Bill.b) Electricity Bill.c) Bank Account Passbook.d)Election Card.e) Letter from the Society on letterhead.f) NOC from the department if applicant is a Government servant.2. Proof of date of birth : School leaving certificate / Birth certificate.3. Citizenship documents (If applicant is citizen of India by registration or naturalization).4. If the applicant does not reside on the present address for the last one year, an additional set of personal particulars form for each additional place of residence is required.5. Colour Photographs (frontal view).6. Two photographs are required for verification at the local police station.",
        },
        {
          qstn: "7) What is the procedure if the applicant is minor? ",
          answer:
            "Attach following additional documents :a) Affidavit by legal guardian (if parents are not legal guardians).b) Affidavit by two responsible persons who know the legal guardian as well as the minor.c) Attested photocopy of passport if any, of both parents, incorporating their present marital status.",
        },
        {
          qstn: "8) What is procedure for change of name after marriage / divorce?",
          answer:
            "a) A woman applying for the first time for a passport in her married name or for change of name/surname in the existing passport on account of marriage should furnish:i) A photocopy of the husband's passport (if issued to him).ii) An attested copy of the marriage certificate issued by Registrar of Marriages or an affidavit from the husband and wife along with a joint photograph.b) Divorcees applying for change of name or deletion of spouse's name in existing passport must furnish:i) Divorce deed / Order of family court.ii) Affidavit furnishing details about divorce.c) Re-married applicants applying for a change of name/spouse's name should furnish:i) Divorce/death certificate as the case may be in respect of first spouse, and ii) Documents as (a) above relating to second marriage.",
        },
        {
          qstn: "9) List of applicants entitled to Emigration Check Not Required stamp (E.C.N.R.)",
          answer:
            "a)People going abroad in managerial capacity and possessing specialized degrees in their respective fields.b)All Gazetted Government servants.c)All Income-Tax payers (including Agricultural Income-Tax Payees) in their individual capacity. I.T. assessment orders issued by Income-Tax Dept. for last three years be submitted along with application for passport. If assessment order is not issued, copies of Income Tax Return stamped by Income Tax authority can be accepted.d)All professional degree holders, such as doctors holding M.B.B.S. degree in Ayurveda or Homoeopathy, accredited Journalists, Engineers, Chartered Accountants, Cost Accountants, Lecturers, Teachers, Scientists, Advocates etc.e)Spouses and dependent children up to the age of 24 years are listed from (b) to (d)f)All persons who have been staying abroad for more than 3 years g)Seamen who are in possession of CDC or C cadets.h)All holders of Diplomatic/Official passports.i)Dependent children of parents whose passports are classified as E.C.N.R. until they attain 24 years of age.j)Persons holding permanent Immigrant Visas.k)Persons holding Graduate or higher degrees.l)Persons holding 3 years diploma equivalent to degrees.m)Nurses possessing qualifications recognized under the Indian Nursing Council Act-1947.n)All persons above the age of 60 years Note- No emigration clearance is required for visiting Bangladesh, Pakistan and all countries of Europe (Excluding C.I.S. States ), North America, Australia, Japan and New Zealand.o)No emigration clearance is required for persons possessing certificate of Vocational Training from the Government/ Government recognized institutions.",
        },
        {
          qstn: "10) What is a VISA?",
          answer:
            "VISA refers to an endorsement (writing or branding) on the passport, made by competent authority of a nation State, allowing entry to the passport holder into another country. VISA is necessary for entry into another country.",
        },
      ],
    },
    {
      title: "FIR / NC",
      content: [
        {
          qstn: "1) What is an F.I.R ?",
          answer:
            "F.I.R. means First Information Report, as per section 154 of Cr.p.c. made to police, about commission of a cognizable offence, In effect, it amounts to putting law in to motion by giving information relating to the commission of a cognizable offence to anofficer in charge of a police station, (which shall be reduced into writing and read over tothe informant) and shall be signed by the person giving such information. It is mandatory to give a copy of the first information report (as recorded by police) to the complainant or informant free of cost.",
        },
        {
          qstn: "2) How do I lodge F.I.R.?",
          answer:
            "The informant/ complainant should go to the police station having jurisdiction over the area (where the offence is committed) and report to officer in-charge/ station house officer about commission of a cognizable offence. In case information is given on telephone, the informant / complainant should subsequently go to the police station for registration of F.I.R.",
        },
        {
          qstn: "3) What is a cognizable case or What is cognizable offence ?",
          answer:
            "A cognizable case means a case in which a police officer may, in accordance with the First Schedule of Cr.P.C. (1973), or under any other law for the time being in force, arrest without warrant.",
        },
        {
          qstn: "4) What is the meaning of the term ‘taking cognizance’?",
          answer:
            "The term ‘taking cognizance’ has not been defined in Code of Criminal Procedure. When any Magistrate takes cognizance under section 190 (1) (a) Cr.P.C., he must not only have applied his mind to the contents of the petition, but he must have done so for the purpose of proceeding in a particular way as per procedure prescribed in the Cr.P.C., and there after sending the complaint for further enquiry. A magistrate can also order investigations under section 156(3) of Cr.P.C.",
        },
        {
          qstn: "5) What is a Non cognizable offence ?",
          answer:
            "Non cognizable offence means in which a police officer has no authority to investigate the matter and arrest without warrant.",
        },
        {
          qstn: "6) How do I lodge a NC complaint ?",
          answer:
            "Information about such offences is to be given in a similar manner as explained under F.I.R.. The officer in-charge would reduce the complaint in writing (about commission of Non cognizable offence) and give a copy thereof to the complainant free of cost. No police officer can investigate a non-cognizable case unless he obtains prior permission of a Magistrate having power to try such case.",
        },
        {
          qstn: "7) What is meant by a ‘complaint’ ?",
          answer:
            "Complaint means any allegation made orally or in writing to a Magistrate, with a view to his taking action under the code of criminal procedure (1973), that some person (whether known or unknown), has committed an offence.",
        },
        {
          qstn: "8) What is meant by public place ?",
          answer:
            "Public place includes (and means) the foreshore, the precincts of every public building or monument, and all place accessible to the public for drawing water, washing or bathing or for the purpose of recreation. { M.P.Act 1951, sec 2(13) }",
        },
      ],
    },
    {
      title: "ARREST-BAIL",
      content: [
        {
          qstn: "1) What is 'Arrest'",
          answer: (
            <div>
              <h1>
                As per Ballentine's Law Dictionary 1948 Ed.P.105, arrest means
                the taking, seizing, or detaining of the person of another,
                either by touching, or putting hands on him, or by any act which
                indicates an intention to take him into custody, and subjects
                the person arrested to the actual control and will of the person
                making the arrest.
              </h1>
              <h1>
                Chapter V and section 41 to 59 of Criminal Procedure Code 1973,
                deals with Arrest of Persons.
              </h1>
              <h1>
                As per section 41 (1) Cr.P.C, Cr.P.C, any police officer may,
                without an order from a Magistrate and without a warrant, arrest
                any person,
              </h1>
              <h1>
                (a) who has been concerned in any cognizable offence, or a
                reasonable complaint has been made, or credible information has
                been received or a reasonable suspicion exists; or
              </h1>
              <h1>
                (b) who has in his possession of any implement of house
                breaking; or
              </h1>
              <h1>(c) who has been proclaimed as an offender or</h1>
              <h1>
                (d) in whose possession anything is found which may reasonably
                be suspected to be stolen property; or
              </h1>
              <h1>
                (e) who obstructs a police officer while in the execution of his
                duty, or who has escaped, or attempts to escape, from lawful
                custody;
              </h1>
              <h1>
                (f) reasonably suspected of being a deserter from any of the
                Armed Forces.
              </h1>
              <h1 className="font-medium">
                As per Section 41A Cr.P.C. - Notice of appearance before police
                officer.
              </h1>
              <h1>
                (1) The police officer may, in all cases where the arrest of a
                person is not required under the provisions of sub-section (1)
                of section 41, issue a notice directing the person against whom
                a reasonable complaint has been made, or credible information
                has been received, or a reasonable suspicion exists that he has
                committed a cognizable offence, to appear before him or at such
                other place as may be specified in the notice.
              </h1>
              <h1>
                (2) Where such a notice is issued to any person, it shall be the
                duty of that person to comply with the terms of the notice.
              </h1>
              <h1>
                (3) Where such person complies and continues to comply with the
                notice, he shall not be arrested in respect of the offence
                referred to in the notice unless, for reasons to be recorded,
                the police officer is of the opinion that he ought to be
                arrested.
              </h1>
              <h1>
                (4) Where such person, at any time, fails to comply with the
                terms of the notice, it shall be lawful for the police officer
                to arrest him for the offence mentioned in the notice, subject
                to such orders as may have been passed in this behalf by a
                competent Court.
              </h1>
              <h1 className="font-normal">
                Hon’ble Supreme court gives directions for arrest of accused
              </h1>
              <h1>
                As per section 42 of Cr.P.C., any person who, in the presence of
                a police officer, has committed or has been accused of
                committing a non-cognizable offence, refuses on demand of such
                officer to give his name and residence, can be arrested.
              </h1>
              <h1>
                As per section 50 of Cr.P.C., person arrested without warrant
                has to be informed about the grounds of his arrest and about his
                entitlement regarding bail.
              </h1>
              <h1>
                As per section 53 of Cr.P.C.,when a person is arrested and if
                there are reasonable grounds for believing that an examination
                of his person will afford evidence as to the commission of an
                offence, it shall be lawful for a registered medical
                practitioner, acting at the request of a police officer not
                below the rank of sub-inspector (and for any person acting in
                good faith in his aid and his direction), to make such an
                examination of a person arrested as is reasonably necessary, and
                to use such force as is reasonably necessary for that purpose.
                When a person of a female is to be examined under this section,
                the examination shall be made only by, or under the supervision
                of, a female registered medical practitioner.
              </h1>
              <h1>
                As per section 56 of Cr.P.C., A police officer making an arrest
                without warrant shall, without unnecessary delay and subject to
                the provisions herein contained as to bail, take or send the
                person arrested before a Magistrate having jurisdiction in the
                case or before the officer in-charge of a police station.
              </h1>
              <h1>
                As per section 57 of Cr.P.C., No police officer shall detain in
                custody a person arrested without warrant for a longer period
                than under all the circumstances of the case is reasonable, and
                such period shall not, in the absence of a special order of a
                Magistrate under section 167, exceed 24 hours exclusive of the
                time necessary for the journey from the place of arrest to the
                Magistrate's Court.
              </h1>
              <h1>
                As per section 151 of Cr.P.C., a person can also be arrested to
                prevent commission of cognizable offences.
              </h1>
            </div>
          ),
        },
        {
          qstn: "2)What is meant by 'Bailable / Non-bailable offences'?",
          answer: (
            <div>
              <h1>
                1. Under the Code of Criminal Procedure 1973 (first schedule),
                offences have been classified as ‘bailable’ and ‘non-bailable’
                offences.
              </h1>
              <h1>
                2.In the case of bailable offences, it is binding upon the court
                to grant bail. However, in case of a non-bailable offence, the
                police cannot grant bail and bail can be granted by a Judicial
                Magistrate/Judge only.
              </h1>
              <h1>
                3.In case of bailable offences, if the accused produces proper
                surety, and fulfills other conditions, it is binding upon the
                Court to grant bail.
              </h1>
              <h1>
                4.In the case of a non-bailable offence, the Investigating
                Officer must produce the accused before the Judicial Magistrate
                / Judge concerned within 24 hours of his arrest, after the
                police custody and court take in magistrate custody. At that
                time, the accused has a right to apply for bail.
              </h1>
            </div>
          ),
        },
      ],
    },
    {
      title: "LOUDSPEAKER",
      content: [
        {
          qstn: "1) Do I need permission for using loud speakers?",
          answer:
            "Yes. You should obtain permission from concerned C.P/ S.P./ District Magistrate for sound amplification under rules made under sec 33 of B.P.Act,1951. Such a permission is required to be taken for private/ public functions held in private / public places.",
        },
        {
          qstn: "2) Do I need license for public show of cinema?",
          answer:
            "Yes. You have to obtain a temporary performance license from concerned licensing authority (C.P./D.M.).",
        },
        {
          qstn: "3) Do I need license/ permission for dramatic/mimetic/musical performances?",
          answer:
            " Yes. You have to obtain a temporary performance/premises license from concerned licensing authority (C.P./D.M.).",
        },
        {
          qstn: "4) Do I need to take permission for organizing a morcha/dharna/public meeting or rally?",
          answer: (
            <div>
              <h1>
                Yes. You need to take permission for taking out a morcha/
                dharna/ organising public meeting or rallies from concerned
                Commissioner of Police or District Magistrate.
              </h1>
              <h1>
                A loud speaker or a public address system shall not be used at
                night (between 10.00 p.m. to 6.00 a.m.) except in closed
                premises for communication within, e.g. auditoria, conference
                rooms, conference rooms, community halls and banquet halls.
              </h1>
            </div>
          ),
        },
      ],
    },
    {
      title: "EXTERNMEN",
      content: [
        {
          qstn: "1)  What is meant by externment?",
          answer:
            " As per section 55 of Maharashtra Police Act, 1951, if the movement or encampment of any gang or body of persons is causing or is calculated to cause danger or alarm or reasonable suspicion that unlawful designs are entertained by such gang, or by members thereof, then such gangs/ bodies of persons can be dispersed and ordered that they remove themselves outside the area. This is process is called externment of gangs and Sub Divisional Magistrates in Districts and DCsP in Commissionerates are empowered to pass such orders. Similarly, section 56 of Maharashtra Police Act, 1951 empowers the above named authorities to extern persons engaged in or about to be engaged in offences punishable under Ch XII - XVI – XVII I.P.C. .(for details, please refer sections 55-56 of Maharashtra Police Act, 1951 )",
        },
        {
          qstn: "2) What is preventive detention?",
          answer:
            "When the executive officers charged with responsibility of maintaining law and order / Public order in their jurisdictions have reasons to believe that activities/ movements of a person are detrimental / prejudicial to maintaining public tranquility and smooth flow of life, such authorities (C.P./D.M.) may authorize and order such a person to be detained under the various preventive detention laws.",
        },
        {
          qstn: "3) What are the executive powers (of CP/DM & other empowered officials) to prohibit certain acts for prevention of disorder?",
          answer:
            "The commissioner of Police and the District Magistrate in areas under their respective charges may issue order in writing u/s 37 (3) of Maharashtra Police Act, 1951 for prohibiting any assembly or procession whenever and for so long as it consider such prohibition necessary for preservation of the public order. Such written order can also be issued for prohibiting the carrying of arms, swords, spears, guns, knives, sticks or lathis, or any other article, which is capable of being used for causing physical violence.",
        },
      ],
    },
    {
      title: "NOICE POLLUTION",
      content: [
        {
          qstn: "1) What is Noise Pollution?",
          answer:
            "Noise pollution means the disturbance produced in environment by undesirable sounds of various kinds.",
        },
        {
          qstn: "2) What are the ill-effects of noise pollution?",
          answer: (
            <div>
              <h1>
                a) Noise as nuisance and health hazard to human beings and other
                living things
              </h1>
              <h1>b) Hearing loss</h1>
              <h1>c) Interference with communication</h1>
              <h1>d) Disturbance of sleep</h1>
              <h1>e) Annoyance</h1>
              <h1>f) Adverse effect on performance</h1>
              <h1>f) Adverse effect on performance</h1>
              <h1>g) Physiological effects</h1>
              <h1>
                h) Accentuated effects on urban children, sick & elderly people
                under recuperation.
              </h1>
            </div>
          ),
        },
        {
          qstn: "3) Restrictions / limits of noise level : (Timings etc.)",
          answer: (
            <div>
              
              <h1>
                Note: - 1. Day time shall mean from 6.00 a.m. to 10.00 p.m.
              </h1>
              <h1>2. Night time shall mean from 10.00 p.m. to 6.00 a.m.</h1>
              <h1>
                3. Silence zone is defined as an area comprising not less than
                100 meters around hospitals, educational institutions and
                courts. The silence zones are zones, which are declared as such
                by the competent authority.
              </h1>
              <h1>
                4. Mixed categories of areas may be declared as one of the
                four-abovementioned categories by the competent authority.
              </h1>
            </div>
          ),
        },
        {
          qstn: "4) What is the meaning of the term ‘taking cognizance’?",
          answer:
            "The term ‘taking cognizance’ has not been defined in Code of Criminal Procedure. When any Magistrate takes cognizance under section 190 (1) (a) Cr.P.C., he must not only have applied his mind to the contents of the petition, but he must have done so for the purpose of proceeding in a particular way as per procedure prescribed in the Cr.P.C., and there after sending the complaint for further enquiry. A magistrate can also order investigations under section 156(3) of Cr.P.C.",
        },
        {
          qstn: "5) What is a Non cognizable offence ?",
          answer:
            "Non cognizable offence means in which a police officer has no authority to investigate the matter and arrest without warrant.",
        },
        {
          qstn: "6) How do I lodge a NC complaint ?",
          answer:
            "Information about such offences is to be given in a similar manner as explained under F.I.R.. The officer in-charge would reduce the complaint in writing (about commission of Non cognizable offence) and give a copy thereof to the complainant free of cost. No police officer can investigate a non-cognizable case unless he obtains prior permission of a Magistrate having power to try such case.",
        },
        {
          qstn: "7) What is meant by a ‘complaint’ ?",
          answer:
            "Complaint means any allegation made orally or in writing to a Magistrate, with a view to his taking action under the code of criminal procedure (1973), that some person (whether known or unknown), has committed an offence.",
        },
        {
          qstn: "8) What is meant by public place ?",
          answer:
            "Public place includes (and means) the foreshore, the precincts of every public building or monument, and all place accessible to the public for drawing water, washing or bathing or for the purpose of recreation. { M.P.Act 1951, sec 2(13) }",
        },
      ],
    },
    {
      title: "HOTEL BRANCH",
      content: [
        {
          qstn: "1) Is a Police licence required for Hotels, Restaurant, eating House, Tea Stall, Juice Center etc?",
          answer:
            "No (License is not required by the government order dated December 22, 2015).",
        },
        {
          qstn: "2) From where the Registration Certificate is issued?",
          answer:
            " License is not required by the government order dated December 22, 2015.",
        },
        {
          qstn: "3) What is the fee for obtaining a Registration Certificate?",
          answer:
            "Registration charges are not required because the licenses are not required by the government order dated December 22, 2015.",
        },
        {
          qstn: "4) Is it necessary to obtain a FL3 licence from the excise Department first and then from Police?",
          answer:
            "Police License is not required by the government order dated December 22, 2015.",
        },
        {
          qstn: "5) What kind of license are given to Hotels from Police Department?",
          answer:
            "Orchestra, D. J. Music, Ghazals, etc. a space license grants for the entertainment program.",
        },
        {
          qstn: "6) Where is the Police Licence available?",
          answer: (
            <div>
              <h1>
                1. Police Licenses are issued from the office of the Police
                Commissioner.
              </h1>
              <h1>
                2. Orchestra, D. J. Music, Ghazals, etc. a space license grants
                for the entertainment program.
              </h1>
            </div>
          ),
        },
        {
          qstn: "7) What kind of a license is required for a permit room ?",
          answer:
            "Police License is not required by the government order dated December 22, 2015.",
        },
        {
          qstn: "8) What kind of License is issued for a guest-house/ lodge?",
          answer:
            " Police License is not required by the government order dated December 22, 2015.",
        },
        {
          qstn: "8) What is FL-III and FL-IV and how it is obtained?",
          answer:
            " FL-III and FL-IV licences are issued by the excise Department.",
        },
      ],
    },
    {
      title: "PROHIBITORY ORDERS",
      content: [
        {
          qstn: "1) I want to sell my weapon. What is the procedure?",
          answer: (
            <div>
              <h1>
                Prohibitory Orders refer to orders issued by competent
                authorities prohibiting certain things under various ACTs
                viz,u/s 36,37 Maharashtra Police Act, 1951, u/s 144 Cr.P.C. etc.
              </h1>
              <h1 className="font-medium">
                M.P. Act sec. 36: Power of Commissioner or the [Superintendent]
                and of other officers to give direction to the public. -
              </h1>
              <h1>
                In areas under their respective charges the Commissioner, and
                subject to his orders every Police Officer not inferior in rank
                to an Inspector, and the [Superintendent] and subject to his
                orders any Police Officer of not lower than such rank as may be
                specified by the State Government in that behalf, may from time
                to time as occasion may arise, but not so as to contravene any
                rule or order under section 33 give all such orders either
                orally or in writing as may be necessary to-
              </h1>
              <h1>
                (a) Direct the conduct of, and behavior or action of persons
                constituting processions or assemblies on or along the streets;
              </h1>
              <h1>
                (b) Prescribe the routes by which and the time at which any such
                processions may or may not pass;
              </h1>
              <h1>
                (c) Prevent obstructions on the occasion of all processions and
                assemblies and in the neighborhood of all places of worship
                during the time of worship and in all cases when any street or
                public place or place of public resort may be thronged or liable
                to be obstructed;
              </h1>
              <h1>
                (d) Keep order on and in all streets, quays, wharves, and at and
                within public bathing, washing and landing places, fairs,
                temples and all other places of public resort;
              </h1>
              <h1>
                (e) Regulate and control the playing of music or singing, or the
                beating of drums, tom-toms and other instruments and the blowing
                or sounding of horns or other noisy instruments in or near any
                street or public place;
              </h1>
              <h1>
                [(ea) Regulate and control the use of loudspeakers in or near
                any public place or in any place of public entertainment;]
              </h1>
              <h1>
                (f) Make reasonable orders subordinate to and in furtherance of
                any order made by a competent authority under sections 33, 35,
                37 to 40, 42, 43 and 45 of this Act.
              </h1>
              <h1 className="font-normal">
                M.P. Act sec. 37: Power to prohibit certain acts for prevention
                of disorder. -
              </h1>
              <h1>
                (1) The Commissioner and the District Magistrate in areas under
                their respective charges may, whenever and for such time as he
                shall consider necessary for the preservation of public peace or
                public safety by a notification publicly promulgated or
                addressed to individuals, prohibit at any town, village or place
                or in the vicinity of any such town, village or place-
              </h1>
              <h1>
                (a) the carrying of arms, cudgels, swords, spears, bludgeons,
                guns, knives, sticks or lathis, or any other article, which is
                capable of being used for causing physical violence,
              </h1>
              <h1>
                (b) the carrying of any corrosive substance or explosives;
              </h1>
              <h1>
                (c) the carrying, collection and preparation of stones or other
                missiles or instruments or means of casting or impelling
                missiles;
              </h1>
              <h1>
                (d) the exhibition of persons or corpses or figures or effigies
                thereof;
              </h1>
              <h1>
                (e) the public utterance of cries, singing of songs, playing of
                music;
              </h1>
              <h1>
                (f) delivery of harangues, the use of gestures or mimetic
                representation, and the preparation, exhibition or dissemination
                of pictures, symbols, placards or any other object or thing
                which may in the opinion of such authority offend against
                decency or morality or undermine the security of or tend to
                overthrow the State. Prohibitory Orders are issued by C.P. /
                D.M. under section 37 of M. P. Act 1951 Such orders are valid
                for a term of 15 days (at a time) and are renewed by the
                competent issuing authorities from time to time.
              </h1>
              <h1>
                Cr.P.C. Section 144 - Power to issue order in urgent cases of
                nuisance or apprehended danger
              </h1>
              <h1>
                (1) In cases where, in the opinion of a District Magistrate, a
                Sub-divisional Magistrate or any other Executive Magistrate
                specially empowered by the State Government in this behalf,
                there is sufficient ground for proceeding under this section and
                immediate prevention or speedy remedy is desirable, such
                Magistrate may, by a written order stating the material facts of
                the case and served in the manner provided by section 134,
                direct any person to abstain from a certain act or to take
                certain order with respect to certain property in his possession
                or under his management, if such Magistrate considers that such
                direction is likely to prevent, or tends to prevent,
                obstruction, annoyance or injury to any person lawfully
                employed, or danger to human life, health or safely, or a
                disturbance of the public tranquility, or a riot, or an affray.
              </h1>
              <h1>
                (2) An order under this section may, in cases of emergency or in
                cases where the circumstances do not admit of the serving in due
                time of a notice upon the person against whom the order is
                directed, be passed ex parte.
              </h1>
              <h1>
                (3) An order under this section may be directed to a particular
                individual, or to persons residing in a particular place or
                area, or to the public generally when frequenting or visiting a
                particular place or area.
              </h1>
              <h1>
                (4) No order under this section shall remain in force for more
                than two months from the making thereof: Provided that, if the
                State Government considers it necessary so to do for preventing
                danger to human life, health or safety or for preventing a riot
                or any affray, it may, by notification, direct that an order
                made by a Magistrate under this section shall remain in force
                for such further period not exceeding six months from the date
                on which the order made by the Magistrate would have, but for
                such order, expired, as it may specify in the said notification.
              </h1>
              <h1>
                (5) Any Magistrate may, either on his own motion or on the
                application of any person aggrieved, rescind or alter any order
                made under this section, by himself or any Magistrate
                subordinate to him or by his predecessor-in-office.
              </h1>
              <h1>
                (6) The State Government may, either on its own motion or on the
                application of any person aggrieved, rescind or alter any order
                made by it under the proviso to sub­section (4).
              </h1>
              <h1>
                (7) Where an application under sub-section (5), or sub-section
                (6) is received, the Magistrate, or the State Government, as the
                case may be, shall afford to the applicant an early opportunity
                of appearing before him or it, either in person or by pleader
                and showing cause against the order, and if the Magistrate or
                the State Government, as the case may be, rejects the
                application wholly or in part, he or it shall record in writing
                the reasons for so doing.
              </h1>
            </div>
          ),
        },
        {
          qstn: "2) What is the penalty for contravention / breach of prohibitory orders under section 36, 37 M.P. Act 1951 and u/s 144 Cr.P.C.?",
          answer:
            "Section 134, 135 of M.P. Act 1951 provides for penal action for such contravention.",
        },
        {
          qstn: "3) What is the penalty for contravention / breach of prohibitory orders under section 144 Cr.P.C.?",
          answer:
            "Section 188 of Indian Penal Code provides for penal action for such contravention.",
        },
      ],
    },
    {
      title: " CYBER CAFE LICENSE",
      content: [
        {
          qstn: "1)  I want to obtain a license for a cyber cafe. What are the requirements?",
          answer: (
            <div>
              <h1>
                You need premises license, ticket selling license & performance
                license
              </h1>
            </div>
          ),
        },
        {
          qstn: "2) What is the penalty for contravention / breach of prohibitory orders under section 36, 37 M.P. Act 1951 and u/s 144 Cr.P.C.?",
          answer:
          (
            <div>
              <h1>
              Make an application affixing a court fee stamp of Rs. 5 on it and submit it along with the following documents.
              </h1>
              <h1>1. Copy of IOD (Intimation Of Disapproval) issued by Concerned corporation</h1>
              <h1>2. Copy of plan/map approved by the Concerned corporation.</h1>
              <h1>3. Copy of the property card, documents of ownership of plot, copy of agreement deed, power of attorney.</h1>
              <h1>4. Full name, age, residential address of the owner, co-owners, proprietors, partners, directors of the firms of the project. Address of the project/ premises.</h1>
              <h1>5. Plot number, survey number</h1>
              <h1>6. Copy of NOC issued earlier by this office (in case of additions and alteration)</h1>
              <h1>7. NOC from Dist. Health Department.</h1>
              <h1>8. Fire Brigade NOC from concerned Corporation.</h1>
              <h1>9. Certificate from Electrical Inspector</h1>
              <h1>10. Number of computers installed.</h1>
              <h1>11. Agreement / Certificate from concerned Internet Service Provider.</h1>
            </div>
          ),
        },
        {
          qstn: "3)  I have submitted all the documents; what do I do now?",
          answer:
           ( <div>
            <h1>
            A) On the receipt of the application along with above documents, enquiries will be made through the local Police station from the law and order point of view. Also a report from the Traffic department from the traffic point of view will be obtained.
            </h1>
            <h1>
            B) After receipt of the above reports, the proposal will be decided and you will be informed accordingly
            </h1>
           </div>),
        },
        {
          qstn: "3)  What is the validity period of the NOC?",
          answer:
           ( <div>
            <h1>
            The NOC will be valid for two years from the date of issue
            </h1>
            
           </div>),
        },
        {
          qstn: "3)  What is the required fee for an NOC?",
          answer:
           ( <div>
            <h1>
            Rs. 400 for Premises, Rs. 100 for Ticket selling, Rs. 100 for performance licence per machine.
            </h1>
            
           </div>),
        },
        {
          qstn: "3)  How much time it will take ?",
          answer:
           ( <div>
            <h1>
            It will take minimum three months.
            </h1>
            
           </div>),
        },
        {
          qstn: "",
          answer:
           ( <div>
            <h1>
            * The above terms and conditions are subject to change as per State Government rules and amendments made by the Licencing Authority from time to time. The Licencing Authority may ask for any other necessary documents if required other than mentioned above.
            </h1>
            
           </div>),
        },
      ],
    },
  ];

  const [selectFAQ, setselectFAQ] = useState("ARMS LICENSE");
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
            <h1 className="pt-14 font-headingFont underline" title={t("faqs")}>
              {t("faqs")}
            </h1>
          </div>

          <div className="w-full flex justify-center  my-10">
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
                  {faq.map((titles, i) => (
                    <ul key={i} className="dropdown-menu">
                      <li
                        onClick={() => {
                          setselectFAQ(titles.title);
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

          {faq.map((data, i) => (
            <div>
              {data.title == selectFAQ ? (
                <div className="text[#15233E] text-justify md:mx-20 lg:mx-44 mx-5  bg-lime-200 shadow-2xl p-5 mt-5 rounded-lg">
                  <br />
                  <h1 className="text-3xl my-6 underline font-headingFont font-bold">
                    {data.title}
                  </h1>
                  {data.content.map((qa, n) => (
                    <div>
                      <h1 className="text-lg font-bold leading-9">{qa.qstn}</h1>
                      <h1 className="text-lg leading-9">
                        <b>Ans : </b>
                        {qa.answer}
                      </h1>
                    </div>
                  ))}

                  <br />
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
