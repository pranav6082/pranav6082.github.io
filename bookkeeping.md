# AI-native accounting and filing: bookkeeping, TDS and GST

*Pranav Garg, cofounder of Kolo. Posted on [LinkedIn](https://www.linkedin.com/in/pranav6082/) on 16 November 2026.*

<h2>Why do this</h2>
<p>This is one of my many attempts to get <strong>hard productivity gains</strong> with AI that drive <strong>direct business outcomes</strong>.</p>
<p>Bookkeeping is an obvious workflow. Everything is digital, raw data to rules to filings, and verifiable.</p>
<p>Every month that means AI does the heavy lifting and drives closing the books on Zoho. Then prepare data for CA firm to file GST and TDS.</p>
<p>With AI apps and models, I realised that getting to the outcome is not trivially easy as of now. Maybe as models and harness become much more capable, they might be able to get to what we have done here by themselves or with much less effort, but all of what we build for bookkeeping here wasn't a cakewalk.</p>
<h2>Before → Now</h2>
<p>Outcome</p>
<ul><li><strong>CA firm billing:</strong> down over 70% a month, same books.</li><li><strong>Human Time spent:</strong> down 80%. 19 hours of AI agent session work in latest month - coming down every month.</li><li><strong>Token cost:</strong> ~$500 at Anthropic's API prices, covered by our flat monthly plan.</li></ul>
<p>Process</p>
<p><img src="https://pranav6082.github.io/posts/img/bookkeeping/fig01.png" alt="Before and now" width="100%"></p>
<p>Accuracy and on-time filing held before too. But the immense pain was context loss and the back and forth on both sides.</p>
<hr>
<h2>How it works</h2>
<p>The whole bookkeeping flow is:</p>
<p><strong>fundamental principles and steps of bookkeeping</strong></p>
<p>implemented as <strong>information flow</strong></p>
<p>between <strong>entities</strong></p>
<p>basis the <strong>business and accounting rules</strong></p>
<p>AI agent moves the information and applies the rules. People involved, like earlier, are the gatekeepers of accuracy and completeness.</p>
<p>Let's define each of these 4 parts</p>
<h3>1. Entities</h3>
<p>Entities are all the sources of information and people involved. 6 types of entities, 36 in total - who pays us, who we pay, where money moves, documents, context and people.</p>
<p>A recent month had 186 bank lines. Around those lines, the same month had:</p>
<ul><li>36 purchase bills built from those lines</li><li>47 invoices found in the mailbox</li><li>51 files in 17 vendor folders on Drive</li><li>21 vendor portals the AI agent logs into</li><li>37 rows in the government's list of our purchase invoices</li><li>134 Slack and mail items read for context</li><li>8 refund requests</li></ul>
<p>Each entity holds part of the context for a transaction.</p>
<ul><li>Bank statement has the amount</li><li>Reason is in Slack or email</li><li>Tax detail is in the invoice</li></ul>
<p>Map below shows all of them around one line in a bank statement.</p>
<p><img src="https://pranav6082.github.io/posts/img/bookkeeping/fig02.png" alt="Everything around one bank line" width="100%"></p>
<p>Any addition to the list of entities directly impacts output quality. For example - our Singapore company wasn't on the list, so a month's export sale was missed when we started.</p>
<p>For an AI-native flow, all entities have to be accessible - read and write - to the AI agent. It happens in one of three ways:</p>
<ul><li>via native connectors/CLI - Slack, email, Google Drive etc</li><li>via APIs - Zoho, payment gateways, bank accounts etc</li><li>via browser - payroll site, GST portal, TDS portal etc</li></ul>
<h3>2. Business and accounting rules</h3>
<p>This is where the context lives now. What used to sit in excel sheets and people's heads is now in these rules.</p>
<p>Rules decide what each line in a bank statement is and what tax it carries. A few examples:</p>
<ol><li>If we get no tax invoice, we can't claim tax credit.</li><li>A service bought from abroad means we pay its GST ourselves.</li><li>The customer's state decides how a sale is taxed in GST.</li><li>Money moved between our own accounts has to cancel out to zero.</li></ol>
<p>Rules live in two places. Where a rule can be written as code, it's a script, so the same input always gives the same output. The rest sit in the harness - instruction files, memory and hooks that the AI agent reads on every run.</p>
<p>Of the 110 rules, 72 are enforced by code, 18 sit in instruction files and 20 are checked by people.</p>
<p>Every mistake we find becomes a rule too. The mistake log has 140 rows now.</p>
<p>Bank lines have ~270 rules and records of their own on top.</p>
<ul><li>120 rules learned from past months tag a line by who it's paid to</li><li>17 tag card payments by merchant</li><li>134 vendors have their tax treatment in project files</li></ul>
<h3>3. AI-native information flow with human in the loop</h3>
<p>This is the <strong>nervous system</strong> of the structure which gets things moving. An example would be a customer refund:</p>
<p><img src="https://pranav6082.github.io/posts/img/bookkeeping/fig03.png" alt="How a refund moves through the flow" width="100%"></p>
<p>Every workflow run follows the same structure:</p>
<ul><li>Scripts do everything a rule can settle - pulling data, building bills and invoices, matching payments by amount, date and payer.</li><li>AI agent does what scripts can't - reading Slack, mail, Drive and vendor portals, writing the reason for each line, drafting asks for missing invoices.</li><li>Evals check the work before a stage moves on - 23 checks across the run.</li><li>People review - our accountant goes through every row in the review sheet, and the CA firm QCs and files.</li><li>A failed eval sends the work back to the AI agent. Every mistake people find goes into the log and comes back as a rule or a check.</li></ul>
<h3>4. Fundamental principles and steps of bookkeeping</h3>
<p>Any AI-native system has to understand the domain deeply, get that understanding right, and then use the tools - code, AI agents, evals - to run it. Here the domain is bookkeeping.</p>
<p>gathering → tagging → squaring inputs and outputs → reconciling → QCing → filing</p>
<p>This was always the flow and that didn't change. What changed is who does each step and how they get done.</p>
<h2>See workflow in Action</h2>
<p><img src="https://pranav6082.github.io/posts/img/bookkeeping/fig04.png" alt="The six steps" width="100%"></p>
<h3>1. Gathering - Get every "record" of the month in one place.</h3>
<p>It has two parts.</p>
<p>First, the bank statements for the month are a must-have, and the run doesn't start without them.</p>
<p>Second, everything that supports their lines is gathered best effort - invoices, payroll, sales, the conversations in Slack and mail and so on.</p>
<p><img src="https://pranav6082.github.io/posts/img/bookkeeping/fig05.png" alt="Gathering" width="100%"></p>
<p>Gathering doesn't start from the bank lines. Each source is pulled for the whole month on its own. That's on purpose - if we only looked for documents behind known bank lines, we'd never find an invoice that has no payment yet.</p>
<p>The output is one file per source for the month, plus a record of the run. Nothing is joined to the bank lines yet. The next step (Tagging) gives each line its reason, and the step after that (Squaring) pairs each line with its document.</p>
<div class="tablewrap"><table><thead><tr><th></th><th>Source</th><th>What it gives us</th><th>How we get it</th></tr></thead><tbody><tr><td>Money in</td><td>Payment gateways</td><td>Each sale, payment by payment. The bank only sees their batched payouts, so the gateway is the only place each sale exists.</td><td>Code pulls them by API.</td></tr><tr><td>Money in</td><td>Sales Slack channel</td><td>Advisory sales, one per message. It's the only place we know the product and the customer's state.</td><td>Code reads it.</td></tr><tr><td>Money in</td><td>Bank statements</td><td>Customers who pay straight into the bank. Those payments are only on the statement.</td><td>From the statements.</td></tr><tr><td>Money out</td><td>One bank account</td><td>Its payments out.</td><td>It has an API and code pulls it.</td></tr><tr><td>Money out</td><td>The other three bank accounts</td><td>Their payments out.</td><td>Our accountant exports them.</td></tr><tr><td>Money out</td><td>Payroll site</td><td>What was paid, and the salary register behind it. Each run needs both.</td><td>Two files from the payroll site.</td></tr></tbody></table></div>
<p>For instance, September's salary entry was first built from the paid file alone, and missed a new joiner, incentives and professional tax.</p>
<p>Every payment out needs an invoice. Code searches the mailbox for invoices, including ones with no payment yet, and lists the Drive invoice folder. An AI agent or a person downloads the rest from vendor portals.</p>
<p>Statements say what moved, not why. So every run also pulls refund asks and context from Slack and the finance mailbox. In September for example, five refunds were booked as purchases and every check passed. Now the books aren't built until that context has been read.</p>
<p>What the step can't do yet is prove the month is complete. It checks that every file is there and overlaps the month, not that it covers every day.</p>
<h3>2. Tagging - Give every line in the bank statement a reason.</h3>
<p>Gathering left one file per source for the month. Nothing in them is joined with each other  yet.</p>
<p>A line in a bank statement has an amount, in vs out, timestamp, and a name. It doesn't say what the money was for. For instance, 22 debits in September weren't expenses: customer refunds, and payments of earlier invoices, vouchers, a TDS payment, a GST transfer. The reasons weren't in the bank statement. They were in our support channel on Slack and in the finance mailbox.</p>
<p><img src="https://pranav6082.github.io/posts/img/bookkeeping/fig06.png" alt="Tagging" width="100%"></p>
<p>Tagging works through the bank statements line by line, and uses the other files from Gathering to find each reason. The gateway payments and sales posts explain money in. The invoices and payroll files explain money out. Slack and mail explain the rest - refunds, returns, one-offs.</p>
<p>The AI agent writes the reason for each one. A rule or a person then confirms it.</p>
<p>Code tags first, by fixed rules. Whatever code can't settle becomes a question. The AI agent proposes a reason and has to say where it found it - a Slack message, a mail, a sales post. A person confirms it, and the answer is kept, so the same line isn't asked again on the next run.</p>
<p>Confirming a written reason is much quicker than working it out from the bank line. That's where the old way went wrong. September had 186 bank lines. They became 36 purchase bills.</p>
<div class="tablewrap"><table><thead><tr><th></th><th>Line in bank statement</th><th>How it gets its reason</th></tr></thead><tbody><tr><td>Money in</td><td>Payment gateway sales</td><td>Each payment is tagged by its order type, so we know which product it was for.</td></tr><tr><td>Money in</td><td>Direct payments</td><td>Code matches them to the sales posts: exact amount within three days first, then payer name, then a near amount, and only if the name also agrees. A match is a question for a person, not a booking.</td></tr><tr><td>Money in</td><td>Returned transfers</td><td>A payment that bounced back is paired with the one that went out, so neither counts.</td></tr><tr><td>Money in</td><td>Own transfers</td><td>Money moved between our accounts is read off the bank narration and tagged as a transfer.</td></tr><tr><td>Money out</td><td>Vendor bills</td><td>Booked at the invoice's value and number. Without a bill number, code won't claim input credit or deduct TDS.</td></tr><tr><td>Money out</td><td>Imported services</td><td>A card payment abroad with no reverse charge entry stops the run. A receipt, proforma or statement isn't accepted as a tax invoice.</td></tr><tr><td>Money out</td><td>Salary</td><td>Each transfer is tagged with the month it pays for, and the total is tied to the payroll entry.</td></tr><tr><td>Money out</td><td>Payments that aren't purchases</td><td>Refunds, earlier invoices, vouchers. A person records each one with its date, amount, treatment and their name.</td></tr><tr><td>Money out</td><td>Vendors who go missing</td><td>If we deducted TDS for a vendor last month and they aren't there this month, the run stops.</td></tr></tbody></table></div>
<p>Where a sale is taxed depends on the customer's state. All sales rows in September traced their state to a record. None fell back to a default. If one does, the run stops.</p>
<p>Transfers are tagged as transfers. Topping up the payroll account isn't a salary expense. The salary is booked when it's paid out.</p>
<p>A wrong tag also costs tax. In June, an automatic rule tagged a cloud server charge as a domestic purchase. It was an imported service, so we owed the GST ourselves under reverse charge. A person caught it, and we fixed the rule.</p>
<p>What tagging can't do yet is stop on everything that matters. An open refund ask today only raises a warning, so the close can move on without it. And salary ties on the total - professional tax and TDS aren't tied yet.</p>
<p>The output is every bank line with its reason and who confirmed it. Most lines already have their document by now - a gateway order, a vendor invoice, a payroll file. The next step (Squaring) chases the ones that don't.</p>
<h3>3. Squaring - Every payment has its document, and every document its payment.</h3>
<p>Tagging gave every line its reason, and most lines came with their document - a gateway order, a vendor invoice, a payroll file. The rest is where tax calculation goes wrong.</p>
<p>Without a tax invoice, we can't claim the GST back or deduct TDS on a bill. And an invoice nobody booked is either unpaid or missing from the books.</p>
<p>So Squaring takes the tagged lines and the purchase register, and checks them against the invoices we pulled from the mailbox and the Drive folder. It runs both ways: each payment looks for its invoice, and each invoice looks for its booking.</p>
<p>Each payment ends as - have it, missing, or not needed - transfers, salary and tax payments need no invoice.  What's still missing goes into one drafted ask, grouped by who owns each vendor. A person sends it.</p>
<p>A month squares only when both lists are empty. The output is every number with a document under it. The next step (Reconciliation) adds them back up and ties the totals.</p>
<p><img src="https://pranav6082.github.io/posts/img/bookkeeping/fig07.png" alt="Squaring" width="100%"></p>
<p>In September, our own sales invoices ran in an unbroken number series, with no gaps and no invoice without its sale. Each of the 17 vendors we deducted TDS from had their invoices on file.</p>
<p>Money in is squared against our own sales invoices. That's where the GST we owe comes from. A refund goes out as a credit note, which lowers the GST we owe. Workflow run in the end proposes it and a person books it.</p>
<p>Money out is squared against vendor invoices. That invoice is what lets us claim the GST back, and it's what TDS is worked out on. Transfers and salary need no invoice. The payroll top-up is tied to what payroll paid out.</p>
<p>Then October found a vendor paid by card that was missing from TDS, and six vendors that had quietly dropped out of the month. Both are checks now: every paid vendor must be covered, and a vendor who disappears month on month gets flagged.</p>
<p>What squaring can't do yet is search everywhere. AI agent looks only in the mailbox and Drive - invoices on a vendor's portal are still downloaded by a person. And the invoice check is flaky and had to be run multiple times to get it right.</p>
<h3>4. Reconciliation - Every total ties to a second record, before anything goes to the CA.</h3>
<p>Squaring left every payment with its document, and every document with its payment. Line by line. But a month can be clean line by line and still wrong in total. Like with a sale counted twice, or a refund missing from both sides.</p>
<p>Reconciliation adds the lines back up and ties each total to a second record, made apart from it. Sales tie to what the gateways paid out and to what we declared. Bills tie to the vendor invoices, TDS to each vendor's invoice folder, and the salary entry to the salary paid. Money in that we can't explain has to be zero.</p>
<p>Code runs every check, and a failed check stops the run. A check with no data fails - it can't pass on an empty month.</p>
<p><img src="https://pranav6082.github.io/posts/img/bookkeeping/fig08.png" alt="Reconciliation" width="100%"></p>
<p>In September, some customer refunds were sitting as purchases, so sales were overstated. The sales check still passed, because the refund was missing on both sides. The AI agent found it by reading the support channel and the finance mailbox, not the bank statement.</p>
<p>That's a check now: every refund request must be booked as a refund.</p>
<p>Before we switched to this flow vs human lead, the agentic flow redid April month from scratch and we scored it against the CA firm's books. It matched 89.5% once payroll was added, then 94.5% after the fixes identified at reconciliation.</p>
<p>Output is the <strong>month's workbook</strong>, with <strong>every check's result</strong> in it.</p>
<h3>5. QC - Every open question gets an answer by a human</h3>
<p>Reconciliation gave us the month's workbook, with every check's result in it. What's left are the questions - a line which couldn't be explained by the system, an invoice still missing, a tax call.</p>
<p>Every open question lands in a review sheet. The AI agent researches each one and proposes an answer, with where it found it. A proposal is never an answer - a person confirms it. Some close on a rule, with no one's time.</p>
<p>Our accountant with the CA firm reviews the sheet.</p>
<p><img src="https://pranav6082.github.io/posts/img/bookkeeping/fig09.png" alt="QC" width="100%"></p>
<p>September had 99 open items. The queue doesn't shrink every month. July and October brought new kinds of questions, and the count jumped.</p>
<p><img src="https://pranav6082.github.io/posts/img/bookkeeping/fig10.png" alt="Review questions per month" width="100%"></p>
<p>Some real ones:</p>
<ol><li>Ask the vendor for the insurer's original invoice, billed to our GSTIN.</li><li>After three refund credit notes, one state's consumer sales go negative. How should the CA file that?</li><li>There's a Zoho invoice in Drive with no September payment against it. Is it unpaid?</li></ol>
<p>The first is about a debit and the tax we can claim back. The second is about credits and the GST we owe. The third is a sale with no credit against it.</p>
<p>Most of the people's time now goes here. Our accountant reviews every row, and that stays.</p>
<p>Every mistake also becomes a check. The September close added rows to our mistake log. Two were serious: an export invoice was missing from GSTR-1, and a background run overwrote a bank statement and dropped the payee names.</p>
<p>After that close, the log had 117 rows. 85 were checked by code. By the October run it had 140 rows, and 100 were checked by code.</p>
<p>The close won't run if a logged mistake has no mechanism for it to not happen again.</p>
<h3>6. Filing and posting - File on time, put it in the books, close the month.</h3>
<p>QC left a reviewed sheet that the CA firm has accepted. That's what gets filed.</p>
<p>The CA firm files GSTR-1, GSTR-3B, TDS and PF.</p>
<p>After filing, the AI agent reads the filed returns back from the GST portal, so we know what actually went in.</p>
<p>I log in and solve the captcha. The AI agent does the clicking.</p>
<p>Then the same month goes into Zoho. Agent posts the sales invoices, bills and salary journal, mostly as drafts, and our accountant publishes them. Filing doesn't wait for this.</p>
<p>Not everything was on time btw.</p>
<ul><li>In September, GSTR-1 went in a day late and GSTR-3B two days late.</li><li>October's GSTR-1 went in on time. It took 102 changes between 2 and 7 November to get there, 22 of them to the flow itself.</li><li>Posting is behind filing. September has only its sales in Zoho, and most of October's sales invoices are still drafts. Neither month is closed yet.</li></ul>
<p>The month closes when everything ties, the filed copies are saved and no draft is left in Zoho. We mark it closed, and its corrections and answers carry into the next month.</p>
<h2>What it took</h2>
<p>From May to August, the flow was super crude. September and October is where it started to take the shape.</p>
<p>The flow has changed 565 times since May, with five big upgrades along the way. It's still a work in progress.</p>
<p><img src="https://pranav6082.github.io/posts/img/bookkeeping/fig11.png" alt="Changes to the flow each month" width="100%"></p>
<p>Two things were new to me: company finance, like how TDS and GST work, and system design: the harness, the code and engineering part, and the tools.</p>
<p>Earlier, the PM owned the outcome and engineers owned the system. Now the outcome is what matters, and anyone with an outcome mindset can drive it. An accountant, and engineer, a designer could probably drive a flow like this one.</p>
<p>🚀 To more of hard productivity gains at a fraction of the cost and time from pre-AI which gets better each time it runs vs starting over</p>
