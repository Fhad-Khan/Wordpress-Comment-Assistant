# Wordpress Comment Assistant

<img width="1280" height="800" alt="02-google-result-actions" src="https://github.com/user-attachments/assets/e8828c3c-597a-4893-b0da-c59d5821d521" />

WordPress Comment Assistant by Paradane helps you discover supported comment forms, draft concise comments grounded in the current article, match a genuinely relevant page from your own website, and keep a local record of every submission.

Start in **Find Sites** by entering a niche or topic. Choose a preset made from common WordPress comment-form signals, enter a custom Google footprint if needed, and optionally limit the query to the past month or year. The extension opens the resulting Google search, checks visible organic results automatically, marks supported pages, and skips pages already present in local Comment History.

Connect your OpenRouter API key, choose a model, and crawl the website you want to use as your backlink catalog. The extension creates factual context for each readable page so OpenRouter can choose an exact catalog URL that fits both the article and the specific angle of the drafted comment.

On a supported article page, click **AI Fill Comment**. The extension extracts the article content, drafts a natural one- or two-sentence comment of no more than 40 words, selects one matching catalog URL, and fills the comment form. Review the completed fields, then click **Post Comment**. Optional article-page auto-posting can be enabled in Profile settings.

On Google Search, up to eight visible results are inspected in parallel. Each result receives a clear status. Basic and Pro plans can submit to one eligible result with **Post Comment** or launch every currently eligible submission together with **Post Comment to All**. Pro can also continue through Google's real **Next** links for 1-100 pages, with a user-selected random delay of 1-300 seconds between pages. CAPTCHA, cross-domain actions, unsupported methods or encodings, and unknown required fields stay manual.

Every installation starts on Free with one active backlink domain and up to 10 submitted links per UTC day. Basic adds Google result posting, Faker identity generation, filtered CSV export, up to 10 active domains, and a Keygate-metered quota of up to 100 submitted links per UTC day. Pro adds automatic continuation across Google result pages and a Keygate-metered quota of up to 1,000 submitted links per UTC day. Paid capabilities and quotas are taken from a signed Keygate license token and live usage status.

Key features:

- Guided Google discovery by niche, comment-form footprint, custom operators, and freshness
- Article-aware comments limited to one or two sentences and 40 words
- Relevant-link selection from a crawled, user-configured website catalog
- Up to eight concurrent Google result inspections with local status labels
- Paid individual Google posting and concurrent **Post Comment to All**
- Pro continuation across 1-100 Google pages using the real **Next** link and a random delay
- Two total attempts for transient result-inspection failures; permanent failures are not retried
- Default-on duplicate-page hiding and configurable per-page submission retry protection
- Uncapped local IndexedDB history with indexed paging and duplicate protection
- Scheduled backlink acceptance checks with configurable frequency, per-run limit, batch size, and pending-entry expiry
- Status, date, and text filters with paid filtered CSV export
- Manual identity details or paid Faker-generated commenter values
- Signed Keygate plan verification, live paid-plan usage metering, and self-service activation/deactivation

Requirements and important notes:

- Requires Chrome 113 or later.
- Requires a user-supplied OpenRouter API key and at least USD 1.00 of verifiable available credit. OpenRouter bills model usage directly to the user.
- Paid features require a customer Keygate license. License activation sends only the license key and a random installation identifier to Paradane's Keygate service; comment content and OpenRouter credentials are not included.
- Discovery opens a normal Google search containing the niche, footprint, and freshness options chosen by the user. Google processes that query under the user's relationship with Google; Paradane does not receive it.
- Catalog analysis sends readable text from the configured website to OpenRouter. Comment generation sends the current article text and relevant catalog context. Local history and failed-attempt counters are not included in prompts.
- Comment submissions go directly to the target website. Paradane does not receive them.
- Automatic submission happens only after the user clicks a posting action or explicitly enables article-page auto-posting.
- Users are responsible for each website's rules, terms, and moderation policies. The extension does not bypass CAPTCHA or other anti-abuse controls.

## Screenshots

<img width="1280" height="800" alt="04-controls-and-licensing" src="https://github.com/user-attachments/assets/2b438a2b-af53-426c-8afb-052c900a509a" />
<img width="1280" height="800" alt="03-discovery-and-catalog" src="https://github.com/user-attachments/assets/725ab68c-9fc6-4f3e-9056-095e7432823d" />
<img width="1280" height="800" alt="01-article-aware-drafting" src="https://github.com/user-attachments/assets/7c59d0bc-d859-4860-a36d-2a6eb73f6189" />
<img width="1280" height="800" alt="05-local-history" src="https://github.com/user-attachments/assets/a42d8bf8-cb7a-463d-b4ed-e25235208220" />
