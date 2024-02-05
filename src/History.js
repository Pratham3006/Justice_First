import React from 'react';
import './History.css';
import Data from './components/Data';

export default function History() {
  const name = "Pratham";
  const secondName = "Shetty";

  return (
    <div>
      <div className='History'>
        <h1 style={{ display: "flex", justifyContent: "center"}} className='Font-History'>History of Cases sent by {name} {secondName} </h1>
        <div className='Table'>
          <div>
            <table>
              <thead>
                <tr>
                  <th style={{textAlign:"center"}}>Sr. No</th>
                  <th style={{textAlign:"center"}}>Date</th>
                  <th style={{textAlign:"center"}}>Case</th>
                  <th className='desc'>Case Description</th>
                  <th style={{textAlign:"center"}}>Judge Assigned</th>
                </tr>
              </thead>
              <tbody>
              <Data srNo={"1"} date={"20-09-2024"} caseID={"FR637"} caseInfo={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."} judgeAssigned={"Judge Smith"}/>
<Data srNo={"2"} date={"21-09-2024"} caseID={"FR638"} caseInfo={"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."} judgeAssigned={"Judge Johnson"}/>
<Data srNo={"3"} date={"22-09-2024"} caseID={"FR639"} caseInfo={"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."} judgeAssigned={"Judge Doe"}/>
<Data srNo={"4"} date={"23-09-2024"} caseID={"FR640"} caseInfo={"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."} judgeAssigned={"Judge Williams"}/>
<Data srNo={"5"} date={"24-09-2024"} caseID={"FR641"} caseInfo={"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."} judgeAssigned={"Judge Smith"}/>
<Data srNo={"6"} date={"25-09-2024"} caseID={"FR642"} caseInfo={"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem."} judgeAssigned={"Judge Johnson"}/>
<Data srNo={"7"} date={"26-09-2024"} caseID={"FR643"} caseInfo={"Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit."} judgeAssigned={"Judge Doe"}/>
<Data srNo={"8"} date={"27-09-2024"} caseID={"FR644"} caseInfo={"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident."} judgeAssigned={"Judge Williams"}/>
<Data srNo={"9"} date={"28-09-2024"} caseID={"FR645"} caseInfo={"Sunt in culpa qui officia deserunt mollit anim id est laborum."} judgeAssigned={"Judge Smith"}/>
<Data srNo={"10"} date={"29-09-2024"} caseID={"FR646"} caseInfo={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."} judgeAssigned={"Judge Johnson"}/>
<Data srNo={"11"} date={"30-09-2024"} caseID={"FR647"} caseInfo={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."} judgeAssigned={"Judge Doe"}/>
<Data srNo={"12"} date={"01-10-2024"} caseID={"FR648"} caseInfo={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."} judgeAssigned={"Judge Williams"}/>
<Data srNo={"13"} date={"02-10-2024"} caseID={"FR649"} caseInfo={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."} judgeAssigned={"Judge Smith"}/>
<Data srNo={"14"} date={"03-10-2024"} caseID={"FR650"} caseInfo={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."} judgeAssigned={"Judge Johnson"}/>
<Data srNo={"15"} date={"04-10-2024"} caseID={"FR651"} caseInfo={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."} judgeAssigned={"Judge Doe"}/>
<Data srNo={"16"} date={"05-10-2024"} caseID={"FR652"} caseInfo={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."} judgeAssigned={"Judge Williams"}/>
<Data srNo={"17"} date={"06-10-2024"} caseID={"FR653"} caseInfo={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."} judgeAssigned={"Judge Smith"}/>
<Data srNo={"18"} date={"07-10-2024"} caseID={"FR654"} caseInfo={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."} judgeAssigned={"Judge Johnson"}/>
<Data srNo={"19"} date={"08-10-2024"} caseID={"FR655"} caseInfo={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."} judgeAssigned={"Judge Doe"}/>
<Data srNo={"20"} date={"09-10-2024"} caseID={"FR656"} caseInfo={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."} judgeAssigned={"Judge Williams"}/>
<Data srNo={"21"} date={"10-10-2024"} caseID={"FR657"} caseInfo={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."} judgeAssigned={"Judge Smith"}/>
<Data srNo={"22"} date={"11-10-2024"} caseID={"FR658"} caseInfo={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."} judgeAssigned={"Judge Johnson"}/>
<Data srNo={"23"} date={"12-10-2024"} caseID={"FR659"} caseInfo={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."} judgeAssigned={"Judge Doe"}/>
<Data srNo={"24"} date={"13-10-2024"} caseID={"FR660"} caseInfo={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."} judgeAssigned={"Judge Williams"}/>
<Data srNo={"25"} date={"14-10-2024"} caseID={"FR661"} caseInfo={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."} judgeAssigned={"Judge Smith"}/>

                
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
