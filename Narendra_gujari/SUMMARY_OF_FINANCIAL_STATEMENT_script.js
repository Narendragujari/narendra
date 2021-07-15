          


             
         
            //revenue
            netrevenue1.innerHTML = localStorage.getItem("ne_rev");
            netrevenue2.innerHTML = localStorage.getItem("ne_rev1");

            //ebitda
            ebitda1.innerHTML = localStorage.getItem("ebi_t");
            ebitda2.innerHTML = localStorage.getItem("ebi_t1");

            //gross profit
            grossprofit1.innerHTML = localStorage.getItem("gp");
            grossprofit2.innerHTML = localStorage.getItem("gp1");

            //profit befor tax
            pbt1.innerHTML = localStorage.getItem("pt");
            pbt2.innerHTML = localStorage.getItem("pt1");

            //profit after tax
            pat1.innerHTML = localStorage.getItem("pat_1");
            pat2.innerHTML = localStorage.getItem("pat_2");

            //cash profit
            cashprofit1.innerHTML = localStorage.getItem("cashp");
            cashprofit2.innerHTML = localStorage.getItem("cashp1");

            //Net worth
            networth1.innerHTML = localStorage.getItem("ts2");
            networth2.innerHTML = localStorage.getItem("ts3");

            //Tangible Net Worth
            tnetworth1.innerHTML = localStorage.getItem("t_n_w2");
            tnetworth2.innerHTML = localStorage.getItem("t_n_w3");

            //Adjusted Net Worth
            anetworth1.innerHTML = localStorage.getItem("anw");
            anetworth2.innerHTML = localStorage.getItem("anw1");

            //Secured Debt - Long Term
            secureddebtlongterm1.innerHTML = localStorage.getItem("nslt");
            secureddebtlongterm2.innerHTML = localStorage.getItem("nslt1");

            //Unsecured Debt - Long Term
            unsecureddebtlongterm1.innerHTML = localStorage.getItem("nuslt");
            unsecureddebtlongterm2.innerHTML = localStorage.getItem("nuslt1");

            //Secured Debt - Short Term
            Secured_Debt_Short_Term1.innerHTML = localStorage.getItem("nsst");
            Secured_Debt_Short_Term2.innerHTML = localStorage.getItem("nsst1");

            //Unsecured Debt - Short Term
            Unsecured_Debt_Short_Term1.innerHTML = localStorage.getItem("nusst");
            Unsecured_Debt_Short_Term2.innerHTML = localStorage.getItem("nusst1");

            //Total Debt
            totaldebt1.innerHTML = localStorage.getItem("t_d");
            totaldebt2.innerHTML = localStorage.getItem("t_d1");

            //Total Funds Employed
            total_funds1.innerHTML  = localStorage.getItem("t_f_e");
            total_funds2.innerHTML  = localStorage.getItem("t_f_e1");

            //Deferred Tax Liability
            deferred_tax_liability1.innerHTML  = localStorage.getItem("dt");
            deferred_tax_liability2.innerHTML  = localStorage.getItem("dt1");

            //Trade Creditors
            trade_creditors1.innerHTML  = localStorage.getItem("tp");
            trade_creditors2.innerHTML  = localStorage.getItem("tp1");

            //Total Current Liabilities
            total_current_liabilities1.innerHTML  = localStorage.getItem("tota_curr_lib");
            total_current_liabilities2.innerHTML  = localStorage.getItem("tota_curr_lib1");

            //Total fixed Assets
            net_fixed_assets1.innerHTML  = localStorage.getItem("tfa");
            net_fixed_assets2.innerHTML  = localStorage.getItem("tfa1");

            //Other Non Current assets
            other_non_current_assetes1.innerHTML  = localStorage.getItem("tnoa");
            other_non_current_assetes2.innerHTML  = localStorage.getItem("tnoa1");

             //Total current assets    
            total_current_assetes1.innerHTML  = localStorage.getItem("tca");
            total_current_assetes2.innerHTML  = localStorage.getItem("tca1");

            //Debtors <= 6 Months
            debtors1.innerHTML  = localStorage.getItem("tr_1");
            debtors2.innerHTML  = localStorage.getItem("tr_2");

            //Debtors > 6 Months
            debtorsm1.innerHTML  = localStorage.getItem("tr_3");
            debtorsm2.innerHTML  = localStorage.getItem("tr_4");

            //Stock
            stock1.innerHTML  = localStorage.getItem("stock");
            stock2.innerHTML  = localStorage.getItem("stock_1");

            //Diversion - Loans to Promoters
            loantopromoters1.innerHTML  = localStorage.getItem("lp");
            loantopromoters2.innerHTML  = localStorage.getItem("lp1");

            //Diversion - Loans to Sister Concerns
            loanstosister1.innerHTML  = localStorage.getItem("lg");
            loanstosister2.innerHTML  = localStorage.getItem("lg1");

            //Diversion - Other Investments, etc. 
            otherinvest1.innerHTML  = localStorage.getItem("d_o_i");
            otherinvest2.innerHTML  = localStorage.getItem("d_o_i1");

            
            // Cash Flow Statement

            document.getElementById("profit_After_Tax").value = localStorage.getItem("pat_2");
            document.getElementById("Add_back_Depreciation").value = localStorage.getItem("dep");
            document.getElementById("Net_Cash_Accruals").value = localStorage.getItem("nca1");
            document.getElementById("Current_Assets").value = localStorage.getItem("dic1");
            document.getElementById("Current_Liabilities").value = localStorage.getItem("dil1");
            document.getElementById("operations").value = localStorage.getItem("cgo1");
            document.getElementById("Fixed_Assets").value = localStorage.getItem("spfa1");
            document.getElementById("Business_Related").value = localStorage.getItem("diib1");
            document.getElementById("Not_Business_Related").value = localStorage.getItem("diinb1");
            document.getElementById("Investing_activities").value = localStorage.getItem("ncia1");
            document.getElementById("Secured_Loans_non_current").value = localStorage.getItem("isl1");
            document.getElementById("Unsecured_Loans_Non_Current").value = localStorage.getItem("iusl1");
            document.getElementById("Secured_Loans_Current").value = localStorage.getItem("iscl1");
            document.getElementById("Unsecured_Loans_Current").value = localStorage.getItem("iucsl1");
            document.getElementById("Other_Long_Term_Liabilities").value = localStorage.getItem("oltl1");
            document.getElementById("Networth").value = localStorage.getItem("idn1");
            document.getElementById("directors").value = localStorage.getItem("ifp1");
            document.getElementById("Deferred_Tax_Liability").value = localStorage.getItem("idtl1");
            document.getElementById("Long_Term_Provisions").value = localStorage.getItem("ilp1");
            document.getElementById("financing_activities").value = localStorage.getItem("fi1");
            document.getElementById("cash_Equivalent").value = localStorage.getItem("cce1");
            document.getElementById("Cash_Opening_Balance").value = localStorage.getItem("ce");
            document.getElementById("Cash_Closing_Balance").value = localStorage.getItem("ce1");
            document.getElementById("Final_Balance").value = localStorage.getItem("blz");



          function dscr() {
              localStorage.setItem("dsc", (parseInt(document.getElementById("loan1").value)||0));
              localStorage.setItem("dsc1", (parseInt(document.getElementById("loan2").value)||0));

            window.location.href = "eligibility_and_ratios.html";

            return false;

          }
    
           
                 
            


       

               // alert(T_F_I);






