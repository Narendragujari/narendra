
  


 
  document.querySelectorAll('.form_apply').forEach(item => {
  item.addEventListener('input', event => {
    oblig();
  })
});
             





              





             //Eligibility Calculation
            
            var netrevenue1 = parseInt(localStorage.getItem("ne_rev"));
            var netrevenue2 =  parseInt(localStorage.getItem("ne_rev1"));

            Turnover.innerHTML  = netrevenue1;
            Turnover1.innerHTML  = netrevenue2;

            var turnover_yoyo = ((netrevenue2 - netrevenue1)/ netrevenue1 )*100;

            year_on_year.innerHTML  = turnover_yoyo.toFixed(0)+"%";

            var pat1 =  parseInt(localStorage.getItem("pat_1"));
            var pat2 = parseInt(localStorage.getItem("pat_2"));

            npat5.innerHTML  = pat1;
            npat6.innerHTML  = pat2;

            var int_1 = parseInt(localStorage.getItem("int1"));
            var int_2 = parseInt(localStorage.getItem("int2"));

            Interest.innerHTML  = int_1;
            Interest1.innerHTML  = int_2;

            var dep_1 = parseInt(localStorage.getItem("dep1"));
            var dep_2 = parseInt(localStorage.getItem("dep"));

            Depreciation.innerHTML  = dep_1;
            Depreciation1.innerHTML  = dep_2;

            var Operating_Profit = Math.round((pat1 + int_1 + dep_1));
            var Operating_Profit1 = Math.round(pat2 + int_2 + dep_2);

            Operating_Profit3.innerHTML  = Operating_Profit;
            Operating_Profit4.innerHTML  = Operating_Profit1;

           var yoyo_growth = Math.round(((Operating_Profit1-Operating_Profit)/Operating_Profit)*100)
           yoy_growth.innerHTML  = yoyo_growth + "%";


           var income_conis;

           if (yoyo_growth>40) {

            income_conis = Math.round(Operating_Profit * 1.4);

           }

          
          else  


           {

            
           income_conis = Operating_Profit1;


           }

           operating_Profit_cons.innerHTML  = income_conis;

           var monthly_income = Math.round(income_conis / 12);
           monthly_Income1.innerHTML  = monthly_income;


           var dscr_consider;

           if (turnover_yoyo<0) {

            dscr_consider = 1;

           }

           else {

            dscr_consider = .8;

           }

           applicable_dscr.innerHTML  = dscr_consider;

           var gross_eligible_income = Math.round(monthly_income / dscr_consider);

           gross_Eligible_Income1.innerHTML  = gross_eligible_income;




           // KEY FINANCIAL INDICATOR


          //Turnover  - YoY %
          turnover_yoy.innerHTML  = turnover_yoyo.toFixed(0)+"%";         
           
          //EBITDA Margin
          var ebit = parseInt(localStorage.getItem("ebi_t"));
          var ebit1 =  parseInt(localStorage.getItem("ebi_t1"));
          var EBITDA_marg = (ebit / netrevenue1)*100;
          var EBITDA_marg1 = (ebit1 / netrevenue2)*100;
          EBITDA_Margin.innerHTML  = EBITDA_marg.toFixed(2)+"%";
          EBITDA_Margin1.innerHTML  = EBITDA_marg1.toFixed(2)+"%";

          //Gross Profir Margin
          var gross_profit = parseInt(localStorage.getItem("gp"));
          var gross_profit1 =  parseInt(localStorage.getItem("gp1"));
          var gross_profit_marg = (gross_profit / netrevenue1)*100;
          var gross_profit_marg1 = (gross_profit1 / netrevenue2)*100;
          Gross_Profir_Margin.innerHTML  = gross_profit_marg.toFixed(2)+"%";
          Gross_Profir_Margin1.innerHTML  = gross_profit_marg1.toFixed(2)+"%";

          //PAT Margin
          var pat_mar = (pat1 / netrevenue1)*100;
          var pat_mar2 = (pat2 / netrevenue2)*100;
          PAT_Margin.innerHTML  = pat_mar.toFixed(2)+"%";
          PAT_Margin1.innerHTML  = pat_mar2.toFixed(2)+"%";


         //Total Debt (Excl WCL) / EBITDA(Excl ODCC Int)
         var total_debt = parseInt(localStorage.getItem("t_d"));
         var total_debt1 =  parseInt(localStorage.getItem("t_d1"));
         var td_ebitda_mar = total_debt / ebit;
         var td_ebitda_mar1 = total_debt1 / ebit1; 
         td_ebita.innerHTML  = td_ebitda_mar.toFixed(2);
         td_ebita1.innerHTML  = td_ebitda_mar1.toFixed(2);

         //Total Leverage 
         var net_worth = parseInt(localStorage.getItem("ts2"));
         var net_worth1 = parseInt(localStorage.getItem("ts3"));
         var total_lev = total_debt / net_worth;
         var total_lev1 = total_debt1 / net_worth1; 
         Total_Leverage.innerHTML  = total_lev.toFixed(2);
         Total_Leverage1.innerHTML  = total_lev1.toFixed(2);

         //Current Ratio
          var total_currentass = parseInt(localStorage.getItem("tca"));
          var total_currentass1 =  parseInt(localStorage.getItem("tca1"));
          var total_currentlia = parseInt(localStorage.getItem("tota_curr_lib"));
          var total_currentlia1 =  parseInt(localStorage.getItem("tota_curr_lib1"));
          var current_rat = (total_currentass / total_currentlia);
          var current_rat1 = (total_currentass1 / total_currentlia1);
          Current_Ratio.innerHTML  = current_rat.toFixed(2);
          Current_Ratio1.innerHTML  = current_rat1.toFixed(2);

          //Liquid Ratio
          var debtormor6 = parseInt(localStorage.getItem("tr_3"));
          var debtormor61 =  parseInt(localStorage.getItem("tr_4"));
          var invent = parseInt(localStorage.getItem("stock"));
          var invent1 =  parseInt(localStorage.getItem("stock_1"));
          var liquid_ratio = ((total_currentass - debtormor6 - invent )/ total_currentlia);
          var liquid_ratio1 = ((total_currentass1 - debtormor61 - invent1 )/ total_currentlia1);
          Liquid_Ratio.innerHTML  = liquid_ratio.toFixed(2);
          Liquid_Ratio1.innerHTML  = liquid_ratio1.toFixed(2);

          //Debt/Equity
          var debt_equity = (total_debt / net_worth);
          var debt_equity1 = (total_debt1 / net_worth1);
          Debt_Equity.innerHTML  = debt_equity.toFixed(2);
          Debt_Equity1.innerHTML  = debt_equity1.toFixed(2);

          //LT Debt / Total Assets
          var slt = parseInt(localStorage.getItem("nslt"));
          var slt1 =  parseInt(localStorage.getItem("nslt1"));
          var uslt =   parseInt(localStorage.getItem("nuslt"));
          var uslt1 =    parseInt(localStorage.getItem("nuslt1"));
          var fixed_ass =  parseInt(localStorage.getItem("tfa"));
          var fixed_ass1 =  parseInt(localStorage.getItem("tfa1"));
          var non_cur_ass =   parseInt(localStorage.getItem("tnoa"));
          var non_cur_ass1 =    parseInt(localStorage.getItem("tnoa1"));
          var ltdebt_asset = ((slt + uslt) / (fixed_ass + non_cur_ass + total_currentass));
          var ltdebt_asset1 = ((slt1 + uslt1) / (fixed_ass1 + non_cur_ass1 + total_currentass1));
          LT_Debt_Total_Assets.innerHTML  = ltdebt_asset.toFixed(2);
          LT_ebt_Total_Assets1.innerHTML  = ltdebt_asset1.toFixed(2);

          //Debtor Days <=6 Mths
          var debtorless6 = parseInt(localStorage.getItem("tr_1"));
          var debtorless61 =  parseInt(localStorage.getItem("tr_2"));
          var debt_daysless6 = (debtorless6/netrevenue1)*360;
          var debt_daysless61 = (debtorless61/netrevenue2)*360;
          Debtors1.innerHTML  = debt_daysless6.toFixed(0);
          Debtors2.innerHTML  = debt_daysless61.toFixed(0);

          //Debtor Days >6 Mths
          var debtor_days_more6 = (debtormor6/netrevenue1)*360;
          var debtor_days_more61 = (debtormor61/netrevenue1)*360;
          Debtors3.innerHTML  = debtor_days_more6.toFixed(0);
          Debtors4.innerHTML  = debtor_days_more61.toFixed(0);

          //Creditor Days
          var pur_1 = parseInt(localStorage.getItem("pur"));
          var pur_2 = parseInt(localStorage.getItem("pur1"));
          var cred_1 = parseInt(localStorage.getItem("tp"));
          var cred_2 = parseInt(localStorage.getItem("tp1"));
          var cred_daya1 = (cred_1 / pur_1)*365 ;
          var cred_daya2 = (cred_2 / pur_2)*365 ;
          Creditor_Days.innerHTML  = cred_daya1.toFixed(0);
          Creditor_Days1.innerHTML  = cred_daya2.toFixed(0);



          //Stock Days
          var cog = parseInt(localStorage.getItem("cogs"));
          var cog1 = parseInt(localStorage.getItem("cogs1"));
          var stockdays = ( invent / cog )*365;
          var stockdays1 = (invent1 / cog1 )*365;
          Stock_Days.innerHTML  = stockdays.toFixed(0);
          Stock_Days1.innerHTML  = stockdays1.toFixed(0);



          //Net Wkg Cap Cycle
          var net_working_cycle = debt_daysless6 + debtor_days_more6 + stockdays - cred_daya1;
          var net_working_cycle1 = debt_daysless61 + debtor_days_more61 + stockdays1 - cred_daya2;
          Net_Wkg_Cap_Cycle.innerHTML  = net_working_cycle.toFixed(0);
          Net_Wkg_Cap_Cycle1.innerHTML  = net_working_cycle1.toFixed(0);


          //Funds Employed to Turnover Ratio
          var fund_emp = parseInt(localStorage.getItem("t_f_e"));
          var fund_emp1 = parseInt(localStorage.getItem("t_f_e1"));
          var fund_emp_to_turn_ratio = (netrevenue1 / fund_emp );
          var fund_emp_to_turn_ratio1 = (netrevenue2 / fund_emp1);
          Funds_Employed_to_Turnover_Ratio.innerHTML  = fund_emp_to_turn_ratio.toFixed(2);
          Funds_Employed_to_Turnover_Ratio1.innerHTML  = fund_emp_to_turn_ratio1.toFixed(2);

          //Returns on Funds Emp
          var return_on_fund_emp = ( pat1 / fund_emp);
          var return_on_fund_emp1 = ( pat2 / fund_emp1);
          Returns_on_Funds_Emp.innerHTML  = return_on_fund_emp.toFixed(2);
          Returns_on_Funds_Emp1.innerHTML  = return_on_fund_emp1.toFixed(2);

          //Returns on Adj Net Worth
          var adj_net = parseInt(localStorage.getItem("anw"));
          var adj_net1 = parseInt(localStorage.getItem("anw1"));
          var retun_on_adj_net_worth = (pat1/adj_net);
          var retun_on_adj_net_worth1 = (pat2/adj_net1);
          Returns_on_Adj_Net_Worth.innerHTML  = retun_on_adj_net_worth.toFixed(2);
          Returns_on_Adj_Net_Worth1.innerHTML  = retun_on_adj_net_worth1.toFixed(2);

          //ROEC
          var pbt = parseInt(localStorage.getItem("pt"));
          var pbt1 = parseInt(localStorage.getItem("pt1"));
          var roec5 = (pbt / (net_worth + total_debt));
          var roec6 = (pbt1 / (net_worth1 + total_debt1));
          roec1.innerHTML  = roec5.toFixed(2);
          roec2.innerHTML  = roec6.toFixed(2);

          //Returns on Total Assets
          var return_assets = (pat1/(fixed_ass + non_cur_ass + total_currentass));
          var return_assets1 = (pat2/(fixed_ass1 + non_cur_ass1 + total_currentass1));
          Returns_on_Total_Assets.innerHTML  = return_assets.toFixed(2);
          Returns_on_Total_Assets1.innerHTML  = return_assets1.toFixed(2);

          //ROE
          var roe_1 = (pat1/net_worth);
          var roe_2 = (pat2/net_worth1);
          roe.innerHTML  = roe_1.toFixed(2);
          roe1.innerHTML  = roe_2.toFixed(2);

          // //DSCR
          var cash_profit =  parseInt(localStorage.getItem("cashp"));
          var cash_profit1 =  parseInt(localStorage.getItem("cashp1"));
          var loan =  parseInt(localStorage.getItem("dsc"))
          var loan1 =  parseInt(localStorage.getItem("dsc1"))
          var dscr1 = (cash_profit / loan);
          var dscr12 = (cash_profit1 / loan1);
          dscr.innerHTML  = dscr1.toFixed(2);
          dscr3.innerHTML  = dscr12.toFixed(2);




function oblig(){

    var income = parseInt(document.getElementById("gross_Eligible_Income1").value || 0);
    var oblig = parseInt(document.getElementById("obligation1").value || 0);
   
    net_eligible_income1 = Math.round(gross_eligible_income - oblig);
    Net_Eligible_Income.innerHTML  = net_eligible_income1;

    var principal = 100000;
    var interest = document.getElementById('rate').value / 1200;
    var payments = document.getElementById('tenure').value;


    // Now compute the monthly payment figure, using esoteric math.
    var monthly = Math.round(principal * interest / (1-(Math.pow(1/(1 + interest), payments)))*100)/100;

var eligibility;

if (payments<=0) {

   eligibility = "";

}

else 
     {

     eligibility = Math.round((net_eligible_income1/monthly)*100000);
}

   Loan_Eligibility_dscr.innerHTML  = eligibility;
}








