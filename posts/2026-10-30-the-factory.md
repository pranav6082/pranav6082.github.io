---
title: "The factory I built, and why I shut it down"
date: 2026-10-30
description: "A system that turned every Slack and email request into a ticket and closed 618 of 867 in a couple of days, then burnt too many tokens."
---

# The factory I built, and why I shut it down

*Pranav Garg, cofounder of Kolo. Posted on [LinkedIn](https://www.linkedin.com/in/pranav6082/) on 30 October 2026.*

All my product work is via Claude Code threads. My attempt: move from babysitting them → human-in-the-loop, autonomous, self-improving system: one that gets work to move with less of my involvement per task type.

Around end of August I started building what I call the "factory"

It read Slack and email every 5 minutes, and every request became a GitHub issue with a follow-up date. It caught the messages I'd have missed.

I didn't have to start a thread, copy the Slack URL or screenshot the email. v1 of spec was auto-ready for me to comment on. Each step to get to spec ran on a skill with its own evals: how I design a landing page, build the front end, draft an email or a Slack reply, write a spec.

Work that already had a standalone skill ran with no input from me: fixing a broken automation, tracing how a new customer found us and posting it for the sales team, updating the CRM when a customer was onboarded.

Then in September I added a Factory watcher and a Factory fixer, two Claude sessions side by side. One found what broke after every run. The other fixed it and auto-merged, so the next factory run, 20 minutes later, was on the new version. It also picked up the comments I left on specs: it learned context gaps and spec gaps, and the next spec had my feedback built in.

It was quite a sight, the two sessions working in real time.

My job moved from watching threads → reviewing specs. And reviewing a spec on my phone was much easier than managing Claude threads.

In a couple of days when it was running, work actually moved: 867 pieces of work came in as tickets, and 618 were closed.

But I had to shut it down. It burnt through the tokens, quite a lot actually. I missed adding token budget guardrails.

So I'm back to babysitting Claude threads. But now I've seen what it looks like when I don't have to.


---

Plain text for AI agents: https://raw.githubusercontent.com/pranav6082/pranav6082.github.io/main/posts/2026-10-30-the-factory.md · [All posts](https://pranav6082.github.io/)
