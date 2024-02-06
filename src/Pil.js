import React from 'react'
import './Pil.css'
import File from './components/File'

export default function Pil() {
  const caseData = {
    head: 'Kesavananda Bharati vs State of Kerala',
    desc: 'Landmark case challenging the Kerala Land Reforms Act, impacting the constitutional framework.',
    judge: 'Chief Justice S. M. Sikri',
    filer: 'Kesavananda Bharati',
    timeline: [
      { date: '1970-10-31', description: 'Petition filed challenging the Kerala Land Reforms Act.' },
      { date: '1971-03-23', description: 'Supreme Court begins hearing the case.' },
      { date: '1973-04-24', description: 'Landmark verdict delivered, establishing the doctrine of basic structure in the Indian Constitution.' },
      { date: '1976-04-30', description: 'Justice Sikri retires; Justice M. H. Beg becomes Chief Justice.' },
      { date: '1976-06-25', description: 'Emergency declared in India, impacting the legal landscape.' },
      { date: '1976-08-13', description: 'Post-Emergency, Kesavananda Bharati case hearings resume.' },
      { date: '1976-11-10', description: 'Justice H. R. Khanna, a key figure in the case, retires.' },
      { date: '1978-03-24', description: 'Kesavananda Bharati case hearings conclude.' },
      { date: '1978-04-27', description: 'Supreme Court upholds the doctrine of basic structure with limitations on parliamentary power.' },
      { date: '1978-04-29', description: 'Kesavananda Bharati case officially concluded.' },
    ],
  };
  const caseData2 = {
    head: 'Navtej Singh Johar vs Union of India',
    desc: 'Historic case challenging the constitutionality of Section 377 of the Indian Penal Code criminalizing homosexuality.',
    judge: 'Chief Justice Dipak Misra',
    filer: 'Navtej Singh Johar and Others',
    timeline: [
      { date: '2016-02-02', description: 'Petition filed challenging the constitutionality of Section 377.' },
      { date: '2017-06-29', description: 'Five-judge Constitution Bench of the Supreme Court begins hearing the case.' },
      { date: '2018-09-06', description: 'Supreme Court decriminalizes consensual homosexual acts in private between adults.' },
      { date: '2018-09-26', description: 'Final judgment is pronounced, affirming the right to equality and dignity for LGBTQ+ individuals.' },
      { date: '2018-12-11', description: 'Navtej Singh Johar case officially concluded.' },
    ],
  };
  const caseData3 = {
    head: 'Bhopal Gas Tragedy Litigation',
    desc: 'Landmark case related to the industrial disaster in Bhopal, India, caused by the Union Carbide pesticide plant gas leak.',
    judge: 'Various Judges over the years',
    filer: 'Government of India, Bhopal Gas Peedith Mahila Udyog Sangathan, and others',
    timeline: [
      { date: '1984-12-02', description: 'Bhopal Gas Tragedy occurs, resulting in thousands of deaths and injuries.' },
      { date: '1985', description: 'Multiple lawsuits filed in India and the U.S. against Union Carbide Corporation.' },
      { date: '1989-02-14', description: 'Bhopal Gas Leak Disaster Act enacted to provide for legal action.' },
      { date: '1992-11-13', description: 'Union Carbide pays $470 million as part of a settlement with the Indian government.' },
      { date: '2010-06-07', description: 'Verdict in the criminal case against Union Carbide officials; sentences are considered inadequate.' },
      { date: '2012-06-28', description: 'Indian government files a curative petition seeking additional compensation.' },
      { date: '2014-06-09', description: 'US court dismisses the last remaining lawsuit against Union Carbide related to the tragedy.' },
      { date: '2019-06-24', description: 'Bhopal Gas Peedith Mahila Udyog Sangathan files a review petition seeking increased compensation.' },
      { date: '2020-08-19', description: 'Supreme Court upholds the 2010 verdict but directs additional compensation and remediation efforts.' },
      { date: '2021-06-07', description: 'Ongoing legal and environmental efforts to address the long-term impact of the Bhopal Gas Tragedy.' },
    ],
  };
  const caseData4 = {
    head: 'Harshad Mehta Securities Scam',
    desc: 'Landmark financial scandal involving manipulation of the stock market by stockbroker Harshad Mehta.',
    judge: 'Various Judges over the years',
    filer: 'Investigation agencies and regulatory bodies',
    timeline: [
      { date: '1990-1991', description: 'Harshad Mehta exploits loopholes in the banking system to manipulate the stock market.' },
      { date: '1992-04-23', description: 'Securities and Exchange Board of India (SEBI) begins investigating irregularities in the stock market.' },
      { date: '1992-06-03', description: 'Harshad Mehta arrested by the Central Bureau of Investigation (CBI).' },
      { date: '1992-11-04', description: 'First chargesheet filed in the case against Harshad Mehta and others.' },
      { date: '1997-12-23', description: 'Harshad Mehta convicted in the Bombay Stock Exchange (BSE) scam case; sentenced to prison.' },
      { date: '2001-12-31', description: 'Harshad Mehta dies in prison.' },
      { date: '2011-06-24', description: 'Supreme Court upholds the conviction of Harshad Mehta and others in the securities scam case.' },
      { date: '2020-10-27', description: 'Web series "Scam 1992: The Harshad Mehta Story" gains popularity, renewing interest in the case.' },
      { date: 'Ongoing', description: 'Continued impact and lessons learned from the Harshad Mehta Scam on financial regulations and market practices.' },
    ],
  };
  
  
  
  
  return (
    <div className='Pil-head'>
        <h1 className='Pil-header'>Case Updates and acknowledgements</h1>

        <File {...caseData} />
        <File {...caseData2} />
        <File {...caseData3} />
        <File {...caseData4} />

    </div>
  )
}
