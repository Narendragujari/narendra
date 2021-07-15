  

// Page 1



var gross_revenue = document.getElementById("gross_revenue");
var gross_revenu1= document.getElementById("gross_revenu1");
var other_income= document.getElementById("other_income");
var other_income1= document.getElementById("other_income1");
var less_excise = document.getElementById("less_excise");
var less_excise1 = document.getElementById("less_excise1");

var opening_stock = document.getElementById("opening_stock");
var opening_stock1 = document.getElementById("opening_stock1");
var purchase = document.getElementById("purchase");
var purchase1 = document.getElementById("purchase1");
var closing_stock = document.getElementById("closing_stock");
var closing_stock1 = document.getElementById("closing_stock1");
var manu_exp = document.getElementById("manu_exp");
var manu_exp1 = document.getElementById("manu_exp1");
var wage_exp = document.getElementById("wage_exp");
var wage_exp1 = document.getElementById("wage_exp1");

var admin_exp = document.getElementById("admin_exp");
var admin_exp1 = document.getElementById("admin_exp1");
var selling_dis = document.getElementById("selling_dis");
var selling_dis1 = document.getElementById("selling_dis1");
var finance_cost  = document.getElementById("finance_cost");
var finance_cost1 = document.getElementById("finance_cost1");
var employee_benefit = document.getElementById("employee_benefit");
var employee_benefit1 = document.getElementById("employee_benefit1");
var other_indirect_expenses = document.getElementById("other_indirect_expenses");
var other_indirect_expenses1 = document.getElementById("other_indirect_expenses1");

var interest_od  = document.getElementById("interest_od");
var interest_fi  = document.getElementById("interest_fi");
var depreciation  = document.getElementById("depreciation");

var interest_od1  = document.getElementById("interest_od1");
var interest_fi1  = document.getElementById("interest_fi1");
var depreciation1  = document.getElementById("depreciation1");

var tax_current  = document.getElementById("tax_current");
var tax_current1  = document.getElementById("tax_current1");

document.querySelectorAll('.form_apply').forEach(item => {
  item.addEventListener('input', event => {
    revenue_op();
    balancesheet();
  })
})

function revenue_op(){
    
    var a = parseFloat(gross_revenue.value) || 0;
    var b = parseFloat(other_income.value) || 0;
    var c = parseFloat(less_excise.value) || 0;
    
    var d = parseFloat(gross_revenu1.value) || 0;
    var e = parseFloat(other_income1.value) || 0;
    var f = parseFloat(less_excise1.value) || 0;
    
    var g = parseFloat(opening_stock.value) || 0;
    var h = parseFloat(purchase.value) || 0;
    var i = parseFloat(closing_stock.value) || 0;
    var j = parseFloat(manu_exp.value) || 0;
    var k = parseFloat(wage_exp.value) || 0;
    
    var l = parseFloat(opening_stock1.value) || 0;
    var m = parseFloat(purchase1.value) || 0;
    var n = parseFloat(closing_stock1.value) || 0;
    var o = parseFloat(manu_exp1.value) || 0;
    var p = parseFloat(wage_exp1.value) || 0;
    

    var admin_exp2 = parseFloat(admin_exp.value) || 0;
    var admin_exp12 = parseFloat(admin_exp1.value) || 0;
    var selling_dis2 = parseFloat(selling_dis.value) || 0;
    var selling_dis12 = parseFloat(selling_dis1.value) || 0;
    var finance_cost2 = parseFloat(finance_cost.value) || 0;
    var finance_cost12 = parseFloat(finance_cost1.value) || 0;
    var employee_benefit2 = parseFloat(employee_benefit.value) || 0;
    var employee_benefit12 = parseFloat(employee_benefit1.value) || 0;
    var other_indirect_expenses2 = parseFloat(other_indirect_expenses.value) || 0;
    var other_indirect_expenses12 = parseFloat(other_indirect_expenses1.value) || 0;
    
    var interest_od2  = parseFloat(interest_od.value) || 0;
    var interest_fi2  = parseFloat(interest_fi.value) || 0;
    var depreciation2  = parseFloat(depreciation.value) || 0;

    var interest_od12  = parseFloat(interest_od1.value) || 0;
    var interest_fi12  = parseFloat(interest_fi1.value) || 0;
    var depreciation12  = parseFloat(depreciation1.value) || 0;
    
    var tax_current2  = parseFloat(tax_current.value) || 0;
    var tax_current12  = parseFloat(tax_current1.value) || 0;

    
    var revenue = a + b - c;
    var revenue1 = d + e - f;
    
    var cogs = Math.round((g + h + j + k) - i) ;
    var cogs1 = Math.round((l + m + o + p) -n );
    
    document.getElementById("net_revenue").value = revenue;
    document.getElementById("net_revenue1").value = revenue1;
    
    document.getElementById("cost_sale").value = cogs;
    document.getElementById("cost_sale1").value = cogs1;
    
    document.getElementById("gross_profit").value = revenue - cogs;
    document.getElementById("gross_profit1").value = revenue1 - cogs1;
    
    var ebitda = (revenue - cogs) - (admin_exp2 + selling_dis2 + finance_cost2 + employee_benefit2 + other_indirect_expenses2);
    var ebitda1 = (revenue1 - cogs1) - (admin_exp12 + selling_dis12 + finance_cost12 + employee_benefit12 + other_indirect_expenses12);
    
    document.getElementById("ebitda").value = ebitda;
    document.getElementById("ebitda1").value = ebitda1;
    
    var pbt = interest_od2 + interest_fi2 + depreciation2;
    var pbt1 = interest_od12 + interest_fi12 + depreciation12;

    
    var pbt2 = ebitda - pbt;
    var pbt12 = ebitda1 - pbt1;
    
    document.getElementById("profit_bf_tax").value = pbt2;
    document.getElementById("profit_bf_tax1").value = pbt12;
    
    var pat =  pbt2 - tax_current2;
    var pat1 =  pbt12 - tax_current12;
    
    document.getElementById("profit_af_tax").value = pat;
    document.getElementById("profit_af_tax1").value = pat1;
}

//******Balance Sheet******//

//Shareholders Fund Previous Year
var share_cap  = document.getElementById("share_cap");
var reserve_surplus  = document.getElementById("reserve_surplus");
var money_receive  = document.getElementById("money_receive");
var loans_dir  = document.getElementById("loans_dir");
var revalue_res  = document.getElementById("revalue_res");
var t_s = document.getElementById("total_share");

//Shareholders Fund Current Year
var share_cap1  = document.getElementById("share_cap1");
var reserve_surplus1  = document.getElementById("reserve_surplus1");
var money_receive1  = document.getElementById("money_receive1");
var loans_dir1  = document.getElementById("loans_dir1");
var revalue_res1 = document.getElementById("revalue_res1");
var t_s1 = document.getElementById("total_share1");

var non_secured_loan = document.getElementById("non_secured_loan");
var non_unsecured_loan = document.getElementById("non_unsecured_loan");
var other_unsecured = document.getElementById("other_unsecured");
var loans_dir_no_loan = document.getElementById("loans_dir_no_loan");
var other_long_term = document.getElementById("other_long_term");
var deferred_tax = document.getElementById("deferred_tax");
var long_term_pro = document.getElementById("long_term_pro");

var non_secured_loan1 = document.getElementById("non_secured_loan1");
var non_unsecured_loan1 = document.getElementById("non_unsecured_loan1");
var other_unsecured1 = document.getElementById("other_unsecured1");
var loans_dir_no_loan1 = document.getElementById("loans_dir_no_loan1");
var other_long_term1 = document.getElementById("other_long_term1");
var deferred_tax1 = document.getElementById("deferred_tax1");
var long_term_pro1 = document.getElementById("long_term_pro1");

//CURRENT Previous Year
var current_secured_loan = document.getElementById("current_secured_loan");
var current_unsecured_loan_bank = document.getElementById("current_unsecured_loan_bank");
var other_short = document.getElementById("other_short");
var working_capital = document.getElementById("working_capital");
var trade_payables = document.getElementById("trade_payables");
var other_current = document.getElementById("other_current");
var short_term = document.getElementById("short_term");
var total_current = document.getElementById("total_current");
//CURRENT Current Year
var current_secured_loan1 = document.getElementById("current_secured_loan1");
var current_unsecured_loan_bank1 = document.getElementById("current_unsecured_loan_bank1");
var other_short1 = document.getElementById("other_short1");
var working_capital1 = document.getElementById("working_capital1");
var trade_payables1 = document.getElementById("trade_payables1");
var other_current1 = document.getElementById("other_current1");
var short_term1 = document.getElementById("short_term1");
var total_current1 = document.getElementById("total_current1");

//Non-current assets - Business Related Only Previous Year
var net_fixed_pl = document.getElementById("net_fixed_pl");
var net_fixed = document.getElementById("net_fixed");
var non_current_invest = document.getElementById("non_current_invest");
var deferred_tax_as = document.getElementById("deferred_tax_as");
var long_term = document.getElementById("long_term");
var loan_group = document.getElementById("loan_group");
var other_no_current_as = document.getElementById("other_no_current_as");
// var non_current_as = document.getElementById("non_current_as");
var int_asset = document.getElementById("int_asset");
var no_current_invest = document.getElementById("no_current_invest");
var lt_loan = document.getElementById("lt_loan");
var loan_promoters = document.getElementById("loan_promoters");
var loan_group_no = document.getElementById("loan_group_no");
var other_non_cu_asset = document.getElementById("other_non_cu_asset");

//Non-current assets - Business Related Only Current Year
var net_fixed_pl1 = document.getElementById("net_fixed_pl1");
var net_fixed1 = document.getElementById("net_fixed1");
var non_current_invest1 = document.getElementById("non_current_invest1");
var deferred_tax_as1 = document.getElementById("deferred_tax_as1");
var long_term1 = document.getElementById("long_term1");
var loan_group1 = document.getElementById("loan_group1");
var other_no_current_as1 = document.getElementById("other_no_current_as1");
// var non_current_as1 = document.getElementById("non_current_as1");
var int_asset1 = document.getElementById("int_asset1");
var no_current_invest1 = document.getElementById("no_current_invest1");
var lt_loan1 = document.getElementById("lt_loan1");
var loan_promoters1 = document.getElementById("loan_promoters1");
var loan_group_no1 = document.getElementById("loan_group_no1");
var other_non_cu_asset1 = document.getElementById("other_non_cu_asset1");

//Current assets - Business Related Only Previous Year
var invest_mat = document.getElementById("invest_mat");
var invent = document.getElementById("invent");
var trade_receive = document.getElementById("trade_receive");
var trade_receive_2 = document.getElementById("trade_receive2");
var cash_eq = document.getElementById("cash_eq");
var short_loan = document.getElementById("short_loan");
var ot_cu_as = document.getElementById("ot_cu_as");
var cu_as_no_bs_in  = document.getElementById("cu_as_no_bs_in");

//Current assets - Business Related Only Current Year
var invest_mat1 = document.getElementById("invest_mat1");
var invent1 = document.getElementById("invent1");
var trade_receive1 = document.getElementById("trade_receive1");
var trade_receive3 = document.getElementById("trade_receive3");
var cash_eq1 = document.getElementById("cash_eq1");
var short_loan1 = document.getElementById("short_loan1");
var ot_cu_as1 = document.getElementById("ot_cu_as1");
var cu_as_no_bs_in1  = document.getElementById("cu_as_no_bs_in1");







function balancesheet(){
    //Shareholders Fund Previous Year
    var share_cap2 = parseFloat(share_cap.value) || 0;
    var reserve_surplus2  = parseFloat(reserve_surplus.value) || 0;
    var money_receive2  = parseFloat(money_receive.value) || 0;
    var loans_dir2  = parseFloat(loans_dir.value) || 0;
    var revalue_res2  = parseFloat(revalue_res.value) || 0;
    //Shareholders Fund Current Year
    var share_cap12 = parseFloat(share_cap1.value) || 0;
    var reserve_surplus12  = parseFloat(reserve_surplus1.value) || 0;
    var money_receive12  = parseFloat(money_receive1.value) || 0;
    var loans_dir12  = parseFloat(loans_dir1.value) || 0;
    var revalue_res12 = parseFloat(revalue_res1.value) || 0;
    
    var non_secured_loan2 = parseFloat(non_secured_loan.value) || 0;
    var non_unsecured_loan2 = parseFloat(non_unsecured_loan.value) || 0;
    var other_unsecured2 = parseFloat(other_unsecured.value) || 0;
    var loans_dir_no_loan2 = parseFloat(loans_dir_no_loan.value) || 0;
    var other_long_term2 = parseFloat(other_long_term.value) || 0;
    var deferred_tax2 = parseFloat(deferred_tax.value) || 0;
    var long_term_pro2 = parseFloat(long_term_pro.value) || 0;
    
    var non_secured_loan12 = parseFloat(non_secured_loan1.value) || 0;
    var non_unsecured_loan12 = parseFloat(non_unsecured_loan1.value) || 0;
    var other_unsecured12 = parseFloat(other_unsecured1.value) || 0;
    var loans_dir_no_loan12 = parseFloat(loans_dir_no_loan1.value) || 0;
    var other_long_term12 = parseFloat(other_long_term1.value) || 0;
    var deferred_tax12 = parseFloat(deferred_tax1.value) || 0;
    var long_term_pro12 = parseFloat(long_term_pro1.value) || 0;
    
    //CURRENT Previous Year
    var current_secured_loan2 = parseFloat(current_secured_loan.value) || 0;
    var current_unsecured_loan_bank2 = parseFloat(current_unsecured_loan_bank.value) || 0;
    var other_short2 = parseFloat(other_short.value) || 0;
    var working_capital2 = parseFloat(working_capital.value) || 0;
    var trade_payables2 = parseFloat(trade_payables.value) || 0;
    var other_current2 = parseFloat(other_current.value) || 0;
    var short_term2 = parseFloat(short_term.value) || 0;
    //CURRENT Current Year
    var current_secured_loan12 = parseFloat(current_secured_loan1.value) || 0;
    var current_unsecured_loan_bank12 = parseFloat(current_unsecured_loan_bank1.value) || 0;
    var other_short12 = parseFloat(other_short1.value) || 0;
    var working_capital12 = parseFloat(working_capital1.value) || 0;
    var trade_payables12 = parseFloat(trade_payables1.value) || 0;
    var other_current12 = parseFloat(other_current1.value) || 0;
    var short_term12 = parseFloat(short_term1.value) || 0;
    
   
    
    //Non-current assets - Business Related Only Previous Year
    var net_fixed_pl2 = parseFloat(net_fixed_pl.value) || 0;
    var net_fixed2 = parseFloat(net_fixed.value) || 0;
    var non_current_invest2 = parseFloat(non_current_invest.value) || 0;
    var deferred_tax_as2 = parseFloat(deferred_tax_as.value) || 0;
    var long_term2 = parseFloat(long_term.value) || 0;
    var loan_group2 = parseFloat(loan_group.value) || 0;
    var other_no_current_as2 = parseFloat(other_no_current_as.value) || 0;
    // var non_current_as2 = parseFloat(non_current_as.value) || 0;
    var int_asset2 = parseFloat(int_asset.value) || 0;
    var no_current_invest2 = parseFloat(no_current_invest.value) || 0;
    var lt_loan2 = parseFloat(lt_loan.value) || 0;
    var loan_promoters2 = parseFloat(loan_promoters.value) || 0;
    var loan_group_no2 = parseFloat(loan_group_no.value) || 0;
    var other_non_cu_asset2 = parseFloat(other_non_cu_asset.value) || 0;
    
    //Non-current assets - Business Related Only Current Year
    var net_fixed_pl12 = parseFloat(net_fixed_pl1.value) || 0;
    var net_fixed12 = parseFloat(net_fixed1.value) || 0;
    var non_current_invest12 = parseFloat(non_current_invest1.value) || 0;
    var deferred_tax_as12 = parseFloat(deferred_tax_as1.value) || 0;
    var long_term12 = parseFloat(long_term1.value) || 0;
    var loan_group12 = parseFloat(loan_group1.value) || 0;
    var other_no_current_as12 = parseFloat(other_no_current_as1.value) || 0;
    // var non_current_as12 = parseFloat(non_current_as1.value) || 0;
    var int_asset12 = parseFloat(int_asset1.value) || 0;
    var no_current_invest12 = parseFloat(no_current_invest1.value) || 0;
    var lt_loan12 = parseFloat(lt_loan1.value) || 0;
    var loan_promoters12 = parseFloat(loan_promoters1.value) || 0;
    var loan_group_no12 = parseFloat(loan_group_no1.value) || 0;
    var other_non_cu_asset12 = parseFloat(other_non_cu_asset1.value) || 0;
    
    //Current assets - Business Related Only Previous Year
    var invest_mat2 = parseFloat(invest_mat.value) || 0;
    var invent2 = parseFloat(invent.value) || 0;
    var trade_receive2 = parseFloat(trade_receive.value) || 0;
    var trade_receive22 = parseFloat(trade_receive_2.value) || 0;
    var cash_eq2 = parseFloat(cash_eq.value) || 0;
    var short_loan2 = parseFloat(short_loan.value) || 0;
    var ot_cu_as2 = parseFloat(ot_cu_as.value) || 0;
    var cu_as_no_bs_in2  = parseFloat(cu_as_no_bs_in.value) || 0;
    
    //Current assets - Business Related Only Current Year
    var invest_mat12 = parseFloat(invest_mat1.value) || 0;
    var invent12 = parseFloat(invent1.value) || 0;
    var trade_receive12 = parseFloat(trade_receive1.value) || 0;
    var trade_receive32 = parseFloat(trade_receive3.value) || 0;
    var cash_eq12 = parseFloat(cash_eq1.value) || 0;
    var short_loan12 = parseFloat(short_loan1.value) || 0;
    var ot_cu_as12 = parseFloat(ot_cu_as1.value) || 0;
    var cu_as_no_bs_in12  = parseFloat(cu_as_no_bs_in1.value) || 0;

    
    //Shareholders Fund 
    var tsf = share_cap2 + reserve_surplus2+ money_receive2+ loans_dir2+ revalue_res2;
    var tsf1 = share_cap12 + reserve_surplus12+ money_receive12+ loans_dir12+ revalue_res12;
    
    var tncl = non_secured_loan2 + non_unsecured_loan2 + other_unsecured2 + loans_dir_no_loan2 + other_long_term2 + deferred_tax2 + long_term_pro2;
    var tncl1 = non_secured_loan12 + non_unsecured_loan12 + other_unsecured12 + loans_dir_no_loan12 + other_long_term12 + deferred_tax12 + long_term_pro12;

    var tcl = current_secured_loan2 + current_unsecured_loan_bank2 + other_short2 + working_capital2 + trade_payables2 + other_current2 + short_term2;
    var tcl1 = current_secured_loan12 + current_unsecured_loan_bank12 + other_short12 + working_capital12 + trade_payables12 + other_current12 + short_term12;
    
    
    
    document.getElementById("total_share").value = tsf;
    document.getElementById("total_share1").value = tsf1;
    
    document.getElementById("total_non").value = tncl;
    document.getElementById("total_non1").value = tncl1;
    
    document.getElementById("total_current").value = tcl;
    document.getElementById("total_current1").value = tcl1;
    
    //Total - EQUITY & LIABILITIES
    var tel = tsf + tncl + tcl;
    var tel1 = tsf1 + tncl1 + tcl1;
    
    document.getElementById("total_equity").value = tel;
    document.getElementById("total_equity1").value = tel1;
    
    //Non-current assets - Business Related Only
    var tnfa = net_fixed_pl2 + net_fixed2;
    var tnfa1 = net_fixed_pl12 + net_fixed12;
    
    document.getElementById("total_net_fixed").value = tnfa;
    document.getElementById("total_net_fixed1").value = tnfa1;
    
    //TOTAL NON CURRENT ASSETS
    var tnfas = tnfa + non_current_invest2 +deferred_tax_as2 +long_term2 + loan_group2+other_no_current_as2 + int_asset2 + no_current_invest2 + lt_loan2+ loan_promoters2 +loan_group_no2 +other_non_cu_asset2;
    var tnfas1 = tnfa1 + non_current_invest12 +deferred_tax_as12 +long_term12 + loan_group12+other_no_current_as12 + int_asset12 + no_current_invest12 + lt_loan12+ loan_promoters12 +loan_group_no12 +other_non_cu_asset12;
    
    document.getElementById("total_no_cu_as").value = tnfas;
    document.getElementById("total_no_cu_as1").value = tnfas1;
    
    //TOTAL - CURRENT ASSETS
    var tca = invest_mat2 + invent2 +  trade_receive2 + trade_receive22+ cash_eq2+  short_loan2 + ot_cu_as2 +  cu_as_no_bs_in2 ;
    var tca1 = invest_mat12 + invent12 +  trade_receive12 + trade_receive32 + cash_eq12+  short_loan12 + ot_cu_as12 +  cu_as_no_bs_in12 ;
    
    document.getElementById("total_current_as").value = tca;
    document.getElementById("total_current_as1").value = tca1;
    
    //Total Assets
    var ta = tca + tnfas;
    var ta1 = tca1 + tnfas1;
    
    document.getElementById("total_assets").value = ta;
    document.getElementById("total_assets1").value = ta1;
    
    //Difference : ASSETS - EQUITY & LIABILITY
    var dael = ta - tel;
    var dael1 = ta1 - tel1;
    document.getElementById("df_as_eq_li").value = dael;
    document.getElementById("df_as_eq_li1").value = dael1;

}



// Year Calculation
var today = new Date();
var currentyear = today.getFullYear();
var previousyear = today.getFullYear()-1;

document.getElementById("py1").innerHTML = previousyear;
document.getElementById("py2").innerHTML = previousyear;
document.getElementById("py3").innerHTML = previousyear;
document.getElementById("cy1").innerHTML = currentyear;
document.getElementById("cy2").innerHTML = currentyear;
document.getElementById("cy3").innerHTML = currentyear;






// For data transfer to financial summery 

function nar()
          {

        


          //Shareholders Fund Previous Year
    var share_cap2 = parseFloat(share_cap.value) || 0;
    var reserve_surplus2  = parseFloat(reserve_surplus.value) || 0;
    var money_receive2  = parseFloat(money_receive.value) || 0;
    var loans_dir2  = parseFloat(loans_dir.value) || 0;
    var revalue_res2  = parseFloat(revalue_res.value) || 0;
    var t_s2 = parseFloat(t_s.value) || 0;

    //Shareholders Fund Current Year
    var share_cap12 = parseFloat(share_cap1.value) || 0;
    var reserve_surplus12  = parseFloat(reserve_surplus1.value) || 0;
    var money_receive12  = parseFloat(money_receive1.value) || 0;
    var loans_dir12  = parseFloat(loans_dir1.value) || 0;
    var revalue_res12 = parseFloat(revalue_res1.value) || 0;
    var t_s12 = parseFloat(t_s1.value) || 0;
    
    var non_secured_loan2 = parseFloat(non_secured_loan.value) || 0;
    var non_unsecured_loan2 = parseFloat(non_unsecured_loan.value) || 0;
    var other_unsecured2 = parseFloat(other_unsecured.value) || 0;
    var loans_dir_no_loan2 = parseFloat(loans_dir_no_loan.value) || 0;
    var other_long_term2 = parseFloat(other_long_term.value) || 0;
    var deferred_tax2 = parseFloat(deferred_tax.value) || 0;
    var long_term_pro2 = parseFloat(long_term_pro.value) || 0;
    
    var non_secured_loan12 = parseFloat(non_secured_loan1.value) || 0;
    var non_unsecured_loan12 = parseFloat(non_unsecured_loan1.value) || 0;
    var other_unsecured12 = parseFloat(other_unsecured1.value) || 0;
    var loans_dir_no_loan12 = parseFloat(loans_dir_no_loan1.value) || 0;
    var other_long_term12 = parseFloat(other_long_term1.value) || 0;
    var deferred_tax12 = parseFloat(deferred_tax1.value) || 0;
    var long_term_pro12 = parseFloat(long_term_pro1.value) || 0;
    
    //CURRENT Previous Year
    var current_secured_loan2 = parseFloat(current_secured_loan.value) || 0;
    var current_unsecured_loan_bank2 = parseFloat(current_unsecured_loan_bank.value) || 0;
    var other_short2 = parseFloat(other_short.value) || 0;
    var working_capital2 = parseFloat(working_capital.value) || 0;
    var trade_payables2 = parseFloat(trade_payables.value) || 0;
    var other_current2 = parseFloat(other_current.value) || 0;
    var short_term2 = parseFloat(short_term.value) || 0;
    //CURRENT Current Year
    var current_secured_loan12 = parseFloat(current_secured_loan1.value) || 0;
    var current_unsecured_loan_bank12 = parseFloat(current_unsecured_loan_bank1.value) || 0;
    var other_short12 = parseFloat(other_short1.value) || 0;
    var working_capital12 = parseFloat(working_capital1.value) || 0;
    var trade_payables12 = parseFloat(trade_payables1.value) || 0;
    var other_current12 = parseFloat(other_current1.value) || 0;
    var short_term12 = parseFloat(short_term1.value) || 0;
    var total_current2 = parseFloat(total_current.value) || 0;
    var total_current12 = parseFloat(total_current1.value) || 0;
    
   
    
    //Non-current assets - Business Related Only Previous Year
    var net_fixed_pl2 = parseFloat(net_fixed_pl.value) || 0;
    var net_fixed2 = parseFloat(net_fixed.value) || 0;
    var non_current_invest2 = parseFloat(non_current_invest.value) || 0;
    var deferred_tax_as2 = parseFloat(deferred_tax_as.value) || 0;
    var long_term2 = parseFloat(long_term.value) || 0;
    var loan_group2 = parseFloat(loan_group.value) || 0;
    var other_no_current_as2 = parseFloat(other_no_current_as.value) || 0;
    
    var int_asset2 = parseFloat(int_asset.value) || 0;
    var no_current_invest2 = parseFloat(no_current_invest.value) || 0;
    var lt_loan2 = parseFloat(lt_loan.value) || 0;
    var loan_promoters2 = parseFloat(loan_promoters.value) || 0;
    var loan_group_no2 = parseFloat(loan_group_no.value) || 0;
    var other_non_cu_asset2 = parseFloat(other_non_cu_asset.value) || 0;
    
    //Non-current assets - Business Related Only Current Year
    var net_fixed_pl12 = parseFloat(net_fixed_pl1.value) || 0;
    var net_fixed12 = parseFloat(net_fixed1.value) || 0;
    var non_current_invest12 = parseFloat(non_current_invest1.value) || 0;
    var deferred_tax_as12 = parseFloat(deferred_tax_as1.value) || 0;
    var long_term12 = parseFloat(long_term1.value) || 0;
    var loan_group12 = parseFloat(loan_group1.value) || 0;
    var other_no_current_as12 = parseFloat(other_no_current_as1.value) || 0;
    var int_asset12 = parseFloat(int_asset1.value) || 0;
    var no_current_invest12 = parseFloat(no_current_invest1.value) || 0;
    var lt_loan12 = parseFloat(lt_loan1.value) || 0;
    var loan_promoters12 = parseFloat(loan_promoters1.value) || 0;
    var loan_group_no12 = parseFloat(loan_group_no1.value) || 0;
    var other_non_cu_asset12 = parseFloat(other_non_cu_asset1.value) || 0;
    
    //Current assets - Business Related Only Previous Year
    var invest_mat2 = parseFloat(invest_mat.value) || 0;
    var invent2 = parseFloat(invent.value) || 0;
    var trade_receive2 = parseFloat(trade_receive.value) || 0;
    var trade_receive22 = parseFloat(trade_receive_2.value) || 0;
    var cash_eq2 = parseFloat(cash_eq.value) || 0;
    var short_loan2 = parseFloat(short_loan.value) || 0;
    var ot_cu_as2 = parseFloat(ot_cu_as.value) || 0;
    var cu_as_no_bs_in2  = parseFloat(cu_as_no_bs_in.value) || 0;
    
    //Current assets - Business Related Only Current Year
    var invest_mat12 = parseFloat(invest_mat1.value) || 0;
    var invent12 = parseFloat(invent1.value) || 0;
    var trade_receive12 = parseFloat(trade_receive1.value) || 0;
    var trade_receive32 = parseFloat(trade_receive3.value) || 0;
    var cash_eq12 = parseFloat(cash_eq1.value) || 0;
    var short_loan12 = parseFloat(short_loan1.value) || 0;
    var ot_cu_as12 = parseFloat(ot_cu_as1.value) || 0;
    var cu_as_no_bs_in12  = parseFloat(cu_as_no_bs_in1.value) || 0;

    var a = parseFloat(gross_revenue.value) || 0;
    var b = parseFloat(other_income.value) || 0;
    var c = parseFloat(less_excise.value) || 0;
    
    var d = parseFloat(gross_revenu1.value) || 0;
    var e = parseFloat(other_income1.value) || 0;
    var f = parseFloat(less_excise1.value) || 0;
    
    var g = parseFloat(opening_stock.value) || 0;
    var h = parseFloat(purchase.value) || 0;
    var i = parseFloat(closing_stock.value) || 0;
    var j = parseFloat(manu_exp.value) || 0;
    var k = parseFloat(wage_exp.value) || 0;
    
    var l = parseFloat(opening_stock1.value) || 0;
    var m = parseFloat(purchase1.value) || 0;
    var n = parseFloat(closing_stock1.value) || 0;
    var o = parseFloat(manu_exp1.value) || 0;
    var p = parseFloat(wage_exp1.value) || 0;
    

    var admin_exp2 = parseFloat(admin_exp.value) || 0;
    var admin_exp12 = parseFloat(admin_exp1.value) || 0;
    var selling_dis2 = parseFloat(selling_dis.value) || 0;
    var selling_dis12 = parseFloat(selling_dis1.value) || 0;
    var finance_cost2 = parseFloat(finance_cost.value) || 0;
    var finance_cost12 = parseFloat(finance_cost1.value) || 0;
    var employee_benefit2 = parseFloat(employee_benefit.value) || 0;
    var employee_benefit12 = parseFloat(employee_benefit1.value) || 0;
    var other_indirect_expenses2 = parseFloat(other_indirect_expenses.value) || 0;
    var other_indirect_expenses12 = parseFloat(other_indirect_expenses1.value) || 0;
    
    var interest_od2  = parseFloat(interest_od.value) || 0;
    var interest_fi2  = parseFloat(interest_fi.value) || 0;
    var depreciation2  = parseFloat(depreciation.value) || 0;

    var interest_od12  = parseFloat(interest_od1.value) || 0;
    var interest_fi12  = parseFloat(interest_fi1.value) || 0;
    var depreciation12  = parseFloat(depreciation1.value) || 0;
    
    var tax_current2  = parseFloat(tax_current.value) || 0;
    var tax_current12  = parseFloat(tax_current1.value) || 0;



        
          //SUMMARY OF FINANCIAL STATEMENT

           //cash profit 
           var cash_profit = parseInt(document.getElementById("ebitda").value || 0) - tax_current2;
           var cash_profit1 = parseInt(document.getElementById("ebitda1").value || 0) - tax_current12; 


           

           //Tangible Net Worth 
           var t_n_w = t_s2 - revalue_res2 - int_asset2;
           var t_n_w1 = t_s12 - revalue_res12 - int_asset12;


           //Adjusted Net Worth 
           var a_n_w = t_n_w - no_current_invest2 - lt_loan2 - loan_promoters2 - loan_group_no2 ;
           var a_n_w1 = t_n_w1 - no_current_invest12 - lt_loan12 - loan_promoters12 - loan_group_no12 ;


           //secured Debt - Long Term     
           var sec_debt_lt = non_secured_loan2 + other_unsecured2 + other_long_term2 ;
           var sec_debt_lt1 = non_secured_loan12 + other_unsecured12 + other_long_term12 ;

 
           //Unsecured Debt - Long Term     
           var un_sec_debt_lt = non_unsecured_loan2 ;
           var un_sec_debt_lt1 = non_unsecured_loan12 ;
           
          
           //secured Debt - Short Term     
           var sec_debt_st = current_secured_loan2 ;
           var sec_debt_st1 = current_secured_loan12 ;

     
           //Unsecured Debt - Short Term     
           var un_sec_debt_st = current_unsecured_loan_bank2 + other_short2;
           var un_sec_debt_st1 = current_unsecured_loan_bank12 + other_short12;


           //Total Debt (Excl Wkg Cap)
           var td =  sec_debt_lt + un_sec_debt_lt + sec_debt_st + un_sec_debt_st;
           var td1 = sec_debt_lt1 + un_sec_debt_lt1 + sec_debt_st1 + un_sec_debt_st1 ;


           //Total Funds Employed  
            var tfe = t_s2 + td ;
            var tfe1 = t_s12 + td1 ;

           //Total Fixed Assets 
           var total_fixed_assets = parseInt(document.getElementById("total_net_fixed").value || 0);
           var total_fixed_assets1 = parseInt(document.getElementById("total_net_fixed1").value || 0) 

           //Other non current assets 
           var other_non_curr_ass = parseInt(document.getElementById("total_no_cu_as").value || 0) - parseInt(document.getElementById("total_net_fixed").value || 0) ;
           var other_non_curr_ass1 = parseInt(document.getElementById("total_no_cu_as1").value || 0) - parseInt(document.getElementById("total_net_fixed1").value || 0) ;

           // total current assets 
           var tca2 =  parseInt(document.getElementById("total_current_as").value || 0) - parseInt(document.getElementById("cu_as_no_bs_in").value || 0) ;
           var tca3 =  parseInt(document.getElementById("total_current_as1").value || 0) - parseInt(document.getElementById("cu_as_no_bs_in1").value || 0) ;

           //Diversion - Other Investments, etc.
           var diversion_other = no_current_invest2 + lt_loan2 + other_non_cu_asset2;
           var diversion_other1 = no_current_invest12 + lt_loan12 + other_non_cu_asset12;




           //Cash Flow Statement

           //Net Cash Accruals 
           var nca = depreciation12 + parseInt(document.getElementById("profit_af_tax1").value || 0);

            //Decrease (Increase) in Current Assets
            var dic = (tca2 - cash_eq2 - cu_as_no_bs_in2 - invest_mat2) - (tca3 - cash_eq12 - cu_as_no_bs_in12 - invest_mat12);

            //Decrease (Increase) in Current Libilities
            var dil = (total_current12 - current_secured_loan12 - current_unsecured_loan_bank12) - (total_current2 - current_secured_loan2 - current_unsecured_loan_bank2);

            //Cash generated from operations                      (A)
            var cgo = nca + dic + dil;

            //Sale / (Purchase) of Fixed Assets
            var spfa = parseInt(document.getElementById("total_net_fixed").value || 0) - parseInt(document.getElementById("total_net_fixed1").value || 0) - depreciation12 ;

            //Decrease (Increase) in Investments / Loans & Advances (Business Related)
            var diib = (non_current_invest2 + deferred_tax_as2 + long_term2 + loan_group2 + other_no_current_as2 + invest_mat2) - (non_current_invest12 + deferred_tax_as12 + long_term12 + loan_group12 + other_no_current_as12 + invest_mat12);

            //Decrease (Increase) in Investments / Loans & Advances (Not Business Related)
            var diinb = (no_current_invest2 + lt_loan2 + loan_promoters2 + loan_group_no2 + other_non_cu_asset2 + cu_as_no_bs_in2) - (no_current_invest12 + lt_loan12 + loan_promoters12 + loan_group_no12 + other_non_cu_asset12 + cu_as_no_bs_in12); 

            //Net Cash used in Investing activities                (B)
            var ncia = spfa + diib + diinb;

            //Increase (Decrease) in Secured Loans (Non Current) 
            var isl = non_secured_loan12 - non_secured_loan2;

            //Increase (Decrease) in Unsecured Loans (Non Current)
            var iusl = non_unsecured_loan12 - non_unsecured_loan2 + other_unsecured12 - other_unsecured2;

            //Increase (Decrease) in Secured Loans (Current)
            var iscl = current_secured_loan12 - current_secured_loan2;

            //Increase (Decrease) in Unsecured Loans (Current)
            var iucsl = current_unsecured_loan_bank12 - current_unsecured_loan_bank2;

            //Other Long Term Liabilities
            var oltl = other_short12 - other_short2;

            //Increase (Decrease) in Networth
            var idn = t_s12 - t_s2 - (parseInt(document.getElementById("profit_af_tax1").value)||0);

           //Increase (Decrease) in Funds from partners / directors (Unsecured Loans)
           var ifp = loans_dir_no_loan12 - loans_dir_no_loan2;

           //Increase (Decrease) in Deferred Tax Liability
           var idtl = deferred_tax12 - deferred_tax2;

           //Increase (Decrease) in Long-term provisions
           var ilp = long_term_pro12 - long_term_pro2;

           //Net Cash from financing activities (C)
           var fi = ilp + idtl + ifp + idn + oltl + iucsl + iscl + iusl + isl;

           //Net increase in cash & Cash Equivalents   (A+B+C)
           var cce = fi + ncia + cgo;

           //Balance -----------------Should always be ZERO
           var bal_zero = cce + cash_eq2 - cash_eq12;
            

          //page 3

           // Turnover - YoY % 
           var revenue = a + b - c;
           var revenue1 = d + e - f;
           



           //Eligibility 
           var int_1 =  interest_od2 + interest_fi2 ;
           var int_2 = interest_od12 + interest_fi12;
          
           








              // Value passing for next page
            

    

               // Page 2

            //revenue
            localStorage.setItem("ne_rev", parseInt(document.getElementById("net_revenue").value || 0));
            localStorage.setItem("ne_rev1", parseInt(document.getElementById("net_revenue1").value || 0));
    
            //ebitda
            localStorage.setItem("ebi_t", parseInt(document.getElementById("ebitda").value || 0));
            localStorage.setItem("ebi_t1", parseInt(document.getElementById("ebitda1").value || 0));
            
            //gross profit
            localStorage.setItem("gp", parseInt(document.getElementById("gross_profit").value || 0));
            localStorage.setItem("gp1", parseInt(document.getElementById("gross_profit1").value || 0));
            
            //profit befor tax
            localStorage.setItem("pt",  parseInt(document.getElementById("profit_bf_tax").value || 0));
            localStorage.setItem("pt1",  parseInt(document.getElementById("profit_bf_tax1").value || 0));
            
            //profit after tax
            localStorage.setItem("pat_1",  parseInt(document.getElementById("profit_af_tax").value || 0));
            localStorage.setItem("pat_2",  parseInt(document.getElementById("profit_af_tax1").value || 0));

            //cash profit
            localStorage.setItem("cashp", cash_profit);
            localStorage.setItem("cashp1", cash_profit1);

            //Net worth
            localStorage.setItem("ts2", t_s2);
            localStorage.setItem("ts3", t_s12);

            //Tangible Net Worth
            localStorage.setItem("t_n_w2", t_n_w);
            localStorage.setItem("t_n_w3", t_n_w1);

            //Adjusted Net Worth
            localStorage.setItem("anw", a_n_w);
            localStorage.setItem("anw1", a_n_w1);

            //Secured Debt - Long Term
            localStorage.setItem("nslt", sec_debt_lt);
            localStorage.setItem("nslt1", sec_debt_lt1);

            //Unsecured Debt - Long Term
            localStorage.setItem("nuslt", un_sec_debt_lt);
            localStorage.setItem("nuslt1", un_sec_debt_lt1);

            //Unsecured Debt - Short Term
            localStorage.setItem("nsst", sec_debt_st);
            localStorage.setItem("nsst1", sec_debt_st1);

            //Unsecured Debt - Short Term
            localStorage.setItem("nusst", un_sec_debt_st);
            localStorage.setItem("nusst1", un_sec_debt_st1);

            //Total Debt
            localStorage.setItem("t_d", td);
            localStorage.setItem("t_d1", td1);

            //Total Funds Employed
            localStorage.setItem("t_f_e", tfe);
            localStorage.setItem("t_f_e1", tfe1);

            //Deferred Tax Liability
            localStorage.setItem("dt", deferred_tax2);
            localStorage.setItem("dt1", deferred_tax12);

            //Trade Creditors
            localStorage.setItem("tp", trade_payables2);
            localStorage.setItem("tp1", trade_payables12);

            //Total Current Liabilities
            localStorage.setItem("tota_curr_lib", total_current2);
            localStorage.setItem("tota_curr_lib1", total_current12);

            //Total fixed Assets
            localStorage.setItem("tfa", total_fixed_assets);
            localStorage.setItem("tfa1", total_fixed_assets1);

            //Other Non Current assets
            localStorage.setItem("tnoa", other_non_curr_ass );
            localStorage.setItem("tnoa1", other_non_curr_ass1);

            //Total current assets            
            localStorage.setItem("tca", tca2);
            localStorage.setItem("tca1", tca3);

            //Debtors <= 6 Months
            localStorage.setItem("tr_1", trade_receive2);
            localStorage.setItem("tr_2", trade_receive12);

            //Debtors > 6 Months
            localStorage.setItem("tr_3", trade_receive22);
            localStorage.setItem("tr_4", trade_receive32);

            //Stock
            localStorage.setItem("stock", (parseInt(document.getElementById("invent").value)||0));
            localStorage.setItem("stock_1", (parseInt(document.getElementById("invent1").value)||0));

            //Diversion - Loans to Promoters
            localStorage.setItem("lp", loan_promoters2);
            localStorage.setItem("lp1", loan_promoters12);

            //Diversion - Loans to Sister Concerns
            localStorage.setItem("lg", loan_group_no2);
            localStorage.setItem("lg1", loan_group_no12);

            //Diversion - Other Investments, etc. 
            localStorage.setItem("d_o_i", diversion_other);
            localStorage.setItem("d_o_i1", diversion_other1);




            //Cash Flow Statement

            localStorage.setItem("dep", depreciation12);
            localStorage.setItem("dep1", depreciation2);
            localStorage.setItem("nca1", nca);
            localStorage.setItem("dic1", dic);
            localStorage.setItem("dil1", dil);
            localStorage.setItem("cgo1", cgo);
            localStorage.setItem("spfa1", spfa);
            localStorage.setItem("diib1", diib);
            localStorage.setItem("diinb1", diinb);
            localStorage.setItem("ncia1", ncia);
            localStorage.setItem("isl1", isl);
            localStorage.setItem("iusl1", iusl);
            localStorage.setItem("iscl1", iscl);
            localStorage.setItem("iucsl1", iucsl);
            localStorage.setItem("oltl1", oltl);
            localStorage.setItem("idn1", idn);
            localStorage.setItem("ifp1", ifp);
            localStorage.setItem("idtl1", idtl);
            localStorage.setItem("ilp1", ilp);
            localStorage.setItem("fi1", fi);
            localStorage.setItem("cce1", cce);
            localStorage.setItem("ce", cash_eq2);
            localStorage.setItem("ce1", cash_eq12);
            localStorage.setItem("blz", bal_zero);




            //page 3

            //Interest paid on Loan
            localStorage.setItem("int1", int_1);
            localStorage.setItem("int2", int_2);

            //Purchases
            localStorage.setItem("pur", h);
            localStorage.setItem("pur1", m);

            //cogs
            localStorage.setItem("cogs", (parseInt(document.getElementById("cost_sale").value)||0));
            localStorage.setItem("cogs1", (parseInt(document.getElementById("cost_sale1").value)||0));
      



                 
             window.location.href = "SUMMARY_OF_FINANCIAL_STATEMENT.html";

            return false;

       


          }
            
             

         
          







