
// else{

//         let totalLateTime = 0
//         let totalOvertime = 0
//         let totalLoans = 0
//         let totalExtra = 0
//         let totAllDiscount = 0
//         let totalAllDaysDiscount = 0
//         let salaryByDayOfTheUser = 0

//         let totalLateTime1 = 0
//         let totalOvertime1 = 0
//         let totalLoans1 = 0
//         let totalExtra1 = 0
//         let totAllDiscount1 = 0
//         let totalAllDaysDiscount1 = 0
//         let salaryByDayOfTheUser1 = 0

//         let totalLateTime2 = 0
//         let totalOvertime2 = 0
//         let totalLoans2 = 0
//         let totalExtra2 = 0
//         let totAllDiscount2 = 0
//         let totalAllDaysDiscount2 = 0
//         let salaryByDayOfTheUser2 = 0

//         let totalLateTime3 = 0
//         let totalOvertime3 = 0
//         let totalLoans3 = 0
//         let totalExtra3 = 0
//         let totAllDiscount3 = 0
//         let totalAllDaysDiscount3 = 0
//         let salaryByDayOfTheUser3 = 0

//         let totalLateTime4 = 0
//         let totalOvertime4 = 0
//         let totalLoans4 = 0
//         let totalExtra4 = 0
//         let totAllDiscount4 = 0
//         let totalAllDaysDiscount4 = 0
//         let salaryByDayOfTheUser4 = 0

//         let finalPrice1 = 0
//         let finalPrice2 = 0
//         let finalPrice3 = 0
//         let finalPrice4 = 0

//         if (userAllDays[0].dateDay==1 &&userAllDays[6].dateDay==7) {
            
//             for (let i = 0; i < 7; i++) {
            
//                 salaryByDayOfTheUser1 = userAllDays[i].salaryByDay
//                 totalLateTime1 = totalLateTime1 + userAllDays[i].userLate;
//                 totalOvertime1 = totalOvertime1 + userAllDays[i].userOvertime;
//                 totalExtra1 = totalExtra1 + userAllDays[i].dailyCoins
    
//                 if (userAllDays[i].dayStatus == 'Half Day Off') {
    
//                     totalLoans1 = totalLoans1
//                     totalAllDaysDiscount1 = totalAllDaysDiscount1 + 0.5
//                     totAllDiscount1 = totAllDiscount1+ -(Math.round(userAllDays[i].salaryByDay/2))
    
//                 }else if(userAllDays[i].dayStatus == 'Full Day Off'){
    
//                     totalLoans1 = totalLoans1
//                     totalAllDaysDiscount1 = totalAllDaysDiscount1 + 1
//                     totAllDiscount1 = totAllDiscount1+ -(Math.round(userAllDays[i].salaryByDay))
    
    
//                 }else{
    
//                     totalLoans1 = totalLoans1 + userAllDays[i].dailyLoans
//                     totalAllDaysDiscount1 = totalAllDaysDiscount1
    
//                 }
    
    
    
//             }
//             finalPrice1 = Math.round(Number(employeeSalary/4) + Number(totalExtra1) + Number(totalLoans1) + Number(totAllDiscount1) + (Number(totalOvertime1)*Math.round(employeeSalary/30/shiftLongTime)) - Number(totalLateTime1)*Math.round(employeeSalary/30/shiftLongTime));
//         }else{

//             finalPrice1 = "Fill all Days..!"
//         }


//         if (userAllDays[7].dateDay==8 &&userAllDays[13].dateDay==14) {
            
//             for (let i = 7; i < 14; i++) {

//                 salaryByDayOfTheUser2 = userAllDays[i].salaryByDay
//                 totalLateTime2 = totalLateTime2 + userAllDays[i].userLate;
//                 totalOvertime2 = totalOvertime2 + userAllDays[i].userOvertime;
//                 totalExtra2 = totalExtra2 + userAllDays[i].dailyCoins
    
//                 if (userAllDays[i].dayStatus == 'Half Day Off') {
    
//                     totalLoans2 = totalLoans2
//                     totalAllDaysDiscount2 = totalAllDaysDiscount2 + 0.5
//                     totAllDiscount2 = totAllDiscount2+ -(Math.round(userAllDays[i].salaryByDay/2))
    
//                 }else if(userAllDays[i].dayStatus == 'Full Day Off'){
    
//                     totalLoans2 = totalLoans2
//                     totalAllDaysDiscount2 = totalAllDaysDiscount2 + 1
//                     totAllDiscount2 = totAllDiscount2+ -(Math.round(userAllDays[i].salaryByDay))
    
    
//                 }else{
    
//                     totalLoans2 = totalLoans2 + userAllDays[i].dailyLoans
//                     totalAllDaysDiscount2 = totalAllDaysDiscount2
    
//                 }
    
    
    
//             }

//             finalPrice2 = Math.round(Number(employeeSalary/4) + Number(totalExtra2) + Number(totalLoans2) + Number(totAllDiscount2) + (Number(totalOvertime2)*Math.round(employeeSalary/30/shiftLongTime)) - Number(totalLateTime2)*Math.round(employeeSalary/30/shiftLongTime));

//         }else{

//             finalPrice2 = "Fill all Days..!"
//         }


//         if (userAllDays[14].dateDay==15 &&userAllDays[20].dateDay==21) {
            
//             for (let i = 14; i < 21; i++) {

//                 salaryByDayOfTheUser3 = userAllDays[i].salaryByDay
//                 totalLateTime3 = totalLateTime3 + userAllDays[i].userLate;
//                 totalOvertime3 = totalOvertime3 + userAllDays[i].userOvertime;
//                 totalExtra3 = totalExtra3 + userAllDays[i].dailyCoins
    
//                 if (userAllDays[i].dayStatus == 'Half Day Off') {
    
//                     totalLoans3 = totalLoans3
//                     totalAllDaysDiscount3 = totalAllDaysDiscount3 + 0.5
//                     totAllDiscount3 = totAllDiscount3+ -(Math.round(userAllDays[i].salaryByDay/2))
    
//                 }else if(userAllDays[i].dayStatus == 'Full Day Off'){
    
//                     totalLoans3 = totalLoans3
//                     totalAllDaysDiscount3 = totalAllDaysDiscount3 + 1
//                     totAllDiscount3 = totAllDiscount3+ -(Math.round(userAllDays[i].salaryByDay))
    
    
//                 }else{
    
//                     totalLoans3 = totalLoans3 + userAllDays[i].dailyLoans
//                     totalAllDaysDiscount3 = totalAllDaysDiscount3
    
//                 }
    
    
    
//             }

//             finalPrice3 = Math.round(Number(employeeSalary/4) + Number(totalExtra3) + Number(totalLoans3) + Number(totAllDiscount3) + (Number(totalOvertime3)*Math.round(employeeSalary/30/shiftLongTime)) - Number(totalLateTime3)*Math.round(employeeSalary/30/shiftLongTime));

//         }else{

//             finalPrice3 = "Fill all Days..!"

//         }
        


//         if (userAllDays[21].dateDay==22 &&userAllDays[27].dateDay==28) {
            
//             for (let i = 21; i < 31; i++) {

//                if (userAllDays[i]) {
                
//                 salaryByDayOfTheUser4 = userAllDays[i].salaryByDay
//                 totalLateTime4 = totalLateTime4 + userAllDays[i].userLate;
//                 totalOvertime4 = totalOvertime4 + userAllDays[i].userOvertime;
//                 totalExtra4 = totalExtra4 + userAllDays[i].dailyCoins
    
//                 if (userAllDays[i].dayStatus == 'Half Day Off') {
    
//                     totalLoans4 = totalLoans4
//                     totalAllDaysDiscount4 = totalAllDaysDiscount4 + 0.5
//                     totAllDiscount4 = totAllDiscount4+ -(Math.round(userAllDays[i].salaryByDay/2))
    
//                 }else if(userAllDays[i].dayStatus == 'Full Day Off'){
    
//                     totalLoans4 = totalLoans4
//                     totalAllDaysDiscount4 = totalAllDaysDiscount4 + 1
//                     totAllDiscount4 = totAllDiscount4+ -(Math.round(userAllDays[i].salaryByDay))
    
    
//                 }else{
    
//                     totalLoans4 = totalLoans4 + userAllDays[i].dailyLoans
//                     totalAllDaysDiscount4 = totalAllDaysDiscount4
    
//                 }

//                }
    
//             }

//             finalPrice4 = Math.round(Number(employeeSalary/4) + Number(totalExtra4) + Number(totalLoans4) + Number(totAllDiscount4) + (Number(totalOvertime4)*Math.round(employeeSalary/30/shiftLongTime)) - Number(totalLateTime4)*Math.round(employeeSalary/30/shiftLongTime));
        
//         }else{
        
//             finalPrice4 = "Fill all Days..!"
        
//         }
        

//         totalLateTime        = totalLateTime1           + totalLateTime2        + totalLateTime3        + totalLateTime4
//         totalOvertime        = totalOvertime1           + totalOvertime2        + totalOvertime3        + totalOvertime4
//         totalLoans           = totalLoans1              + totalLoans2           + totalLoans3           + totalLoans4
//         totalExtra           = totalExtra1              + totalExtra2           + totalExtra3           + totalExtra4
//         totAllDiscount       = totAllDiscount1          + totAllDiscount2       + totAllDiscount3       + totAllDiscount4
//         totalAllDaysDiscount = totalAllDaysDiscount1    + totalAllDaysDiscount2 + totalAllDaysDiscount3 + totalAllDaysDiscount4
//         salaryByDayOfTheUser = salaryByDayOfTheUser1    + salaryByDayOfTheUser2 + salaryByDayOfTheUser3 + salaryByDayOfTheUser4

//         document.getElementById('displayInfo').innerHTML = 
//         `
//         <div class="col-11 mx-auto border border-5 border-primary rounded-3">

//             <div class="row ps-3 bg-primary py-3">
//                 <h3 class="col-md-6 col-lg-12 my-2 d-flex justify-content-start align-items-center">Name : ${employee}</h3>
//                 <h3 class="col-md-6 col-lg-4 my-2 d-flex justify-content-start align-items-center">Salary : ${employeeSalary} EGP</h3>
//                 <h3 class="col-md-6 col-lg-4 my-2 d-flex justify-content-start align-items-center">Salary Day : ${Math.round(employeeSalary/30)} EGP</h3>
//                 <h3 class="col-md-6 col-lg-4 my-2 d-flex justify-content-start align-items-center">Salary Hour : ${Math.round(employeeSalary/30/shiftLongTime)} EGP</h3>
//             </div>
        
//             <div class="row ps-3 py-4">
//                 <h3 class="col-12  my-3"><span class="fw-bolder me-2">Total Loans     : ${totalLoans}    EGP</h3>
//                 <h3 class="col-12  my-3"><span class="fw-bolder me-2">Total Extras    : ${totalExtra}    EGP</h3>

//                 <h3 class="col-12  my-3"><span class="fw-bolder me-2">Total LateTime  : ${totalLateTime} H</h3>
//                 <h3 class="col-12  my-3"><span class="fw-bolder me-2">Total OverTime  : ${totalOvertime} H</h3>

//                 <h3 class="col-12  my-3"><span class="fw-bolder me-2">Days Discount : ${totalAllDaysDiscount}    Days</h3>
//             </div>

//             <div class="row ps-3 bg-primary py-3">
//                 <h3 class="col-12  my-3"><span class="fw-bolder me-2">Week-1 : ${finalPrice1} EGP</h3>
//             </div>
//             <div class="row ps-3 bg-primary py-3">
//                 <h3 class="col-12  my-3"><span class="fw-bolder me-2">Week-2 : ${finalPrice2} EGP</h3>
//             </div>
//             <div class="row ps-3 bg-primary py-3">
//                 <h3 class="col-12  my-3"><span class="fw-bolder me-2">Week-3 : ${finalPrice3} EGP</h3>
//             </div>
//             <div class="row ps-3 bg-primary py-3">
//                 <h3 class="col-12  my-3"><span class="fw-bolder me-2">Week-4 : ${finalPrice4} EGP</h3>
//             </div>
    
//         </div>

//         `

//     }