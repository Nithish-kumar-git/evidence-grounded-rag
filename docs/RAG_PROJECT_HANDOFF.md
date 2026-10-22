# Evidence Grounded RAG — project handoff

Prepared October 16, 2026. This document describes the standalone local repository.
Read this and `rag_demo/README.md` before resuming. It is not production sign-off or
a complete security certification.

## 22 October 2026 live-integration verification attempt

This bounded attempt started from published remote `main` at
`7d0bdbf78d2f9b1629fc6687ff8ead32552aa5d1`. It performed state and runtime
readiness inspection only. No database connection, SQL, provider request, upload,
account creation, application-table read, schema change, deployment or dependency
installation occurred.

### Checkout and dependency state

- Development checkout: `main` at
  `804a268b721d6cb42e71461c2d175db4889162da`, no remote configured, with its
  pre-existing modification to `docs/RAG_PROJECT_HANDOFF.md` preserved.
- Publication checkout: clean `main` at `3997dea5705a9ae24560c3a82d1d3581608fee2f`,
  two commits behind remote after fetch. It was not pulled or modified. A separate
  clean clone of current remote `main` was used for this documentation update.
- Declarations remain FastAPI 0.133.0, Starlette 1.3.1, Uvicorn 0.34.3,
  HTTPX 0.28.1, psycopg 3.2.9 and pypdf 6.20.1. The preserved development `.venv`
  still contains FastAPI 0.116.1 / Starlette 0.47.2; the ignored Phase 7 candidate
  remains available with FastAPI 0.133.0 / Starlette 1.3.1. Neither was changed.

### Live readiness and result

The current source and one-time schema still agree on
`gemini-embedding-001` at exactly 768 dimensions, with separate document/query
task types and a stored `embedding_contract`. This is static configuration
agreement, not a fresh embedding result.

No `RAG_*` process variables or repository `.env*` files were available. No
listeners were present on the documented database/API/UI ports 5544, 8001 or 5174.
Both running- and all-container listings returned no container named
`fft-rag-demo-local`. Consequently the required isolated pgvector database was not
available, and the separate Gemini credential was not available through a safe
non-secret mechanism.

The committed live evaluator also retains two generated accounts and five of six
uploaded documents. `rag_app` cannot delete accounts, while the exact-account
bootstrap cleanup credential/tool is intentionally not shipped. Running it without
that reviewed cleanup path would violate this milestone's cleanup requirement.

Therefore the genuine pipeline was **not executed**:

| Required evidence | 22 October result |
|---|---|
| Gemini document/query embeddings and answer generation | Blocked; no provider request made |
| PostgreSQL/pgvector storage and retrieval | Blocked; dedicated loopback service unavailable |
| Ingestion, distractor retrieval and 768-dimensional stored vectors | Not run |
| Citation integrity and semantic support inspection | Not run; historical lexical/overlap metrics were not reused as semantic proof |
| Unsupported-question abstention | Not run |
| Two-identity isolation | Not run |
| Cleanup | No fixtures were created, so no cleanup was required |

No offline suite was repeated because application code did not change and mocked
checks cannot satisfy this live milestone. Documentation consistency, Markdown
references and the final diff were checked separately.

**Exact blocker:** the isolated pgvector service, a privately supplied RAG-only
Gemini key, and a reviewed exact-account cleanup mechanism were not simultaneously
available. **Single smallest next action:** restore the named dedicated local
pgvector container on `127.0.0.1:5544`; before running the evaluator, also confirm
the private bootstrap cleanup path for its exact generated account IDs. Do not
substitute a shared/production database.

## 21 October 2026 closeout snapshot

This snapshot supersedes the historical no-remote/publication statements below;
the provenance record remains intact.

| Item | Verified value |
|---|---|
| Repository | <https://github.com/Nithish-kumar-git/evidence-grounded-rag> |
| Authoritative checkout for this closeout | `C:\Users\itsni\OneDrive\Documents\ChatGPT\project collections\evidence-grounded-rag` |
| Default / active branch | `main` / `main` |
| Documentation base commit | `3997dea5705a9ae24560c3a82d1d3581608fee2f` |
| Base synchronization | Local `main` matched `origin/main`; zero ahead and zero behind |
| Base working tree | Clean; no modified or untracked user work |
| Public deployment | None; no deployment configuration is tracked |

The documentation commit containing this snapshot cannot embed its own hash. Use
`git log -1 --format=%H -- docs/RAG_PROJECT_HANDOFF.md` after commit and compare the
remote with `git ls-remote origin refs/heads/main`.

Current stack and assumptions: Python 3.12+, FastAPI, PostgreSQL 16 with pgvector,
Gemini embeddings/generation, React 18 and Vite 6; Node.js 22+; local loopback UI
and API on Windows are the documented demonstration path. Configuration names are
`RAG_DEMO_ENABLED`, `RAG_DATABASE_URL`, `RAG_GEMINI_API_KEY`,
`RAG_EMBEDDING_MODEL`, `RAG_EMBEDDING_DIMENSIONS`, `RAG_ANSWER_MODEL`,
`RAG_CHUNK_SIZE` and `RAG_CHUNK_OVERLAP`; never publish their values.

Setup, run and focused verification commands remain the ones documented in the
sections below. The 77 backend tests, six JSON checks, 10 frontend tests and build
are recorded historical candidate results, not checks rerun for this documentation
closeout. Mock evaluation is lexical/test-only. Historical live Gemini/pgvector
results are not a fresh rehearsal, and literal quote/citation integrity does not
establish that every generated claim is semantically entailed by its evidence.

Remaining blocker: perform one approved end-to-end rehearsal with the patched
environment, dedicated local pgvector database, live Gemini access, synthetic
documents, browser citation inspection and owner-scoped cleanup. Provider calls,
database access, credential entry, resource mutation and any hosted deployment
require explicit approval. Until that rehearsal is completed, the source can be
frozen as a documented local demo, but live integration remains **awaiting
verification**.

## Current status and provenance

- Standalone repository: `evidence-grounded-rag`, branch `main`; use your checkout
  root for the relative paths and commands below.
- Imported HEAD: `66e4fa14e5f10c085f3db92a2567c1d7d20d3305`.
- Exactly three commits were replayed into a newly initialized repository using
  inspected Git patches. Authors, author dates, messages and patch contents were
  preserved. New hashes reflect removal of the finance ancestry.
- No remote, tag, original finance ancestor commits, source `.git`, environment
  files, credentials, databases, volumes or deployment configuration were copied.
- All 33 approved committed blobs matched before packaging. The root commit adds
  32 files; the second changes only requirements; the third adds this handoff.
- Standalone packaging was committed as `5c687508b98529681d78b11357a45d614db0ae76`.
  The committed layout uses `frontend/`
  instead of the imported `familyfinancetracker/` paths.
- The fifth commit, `f4db5e559873a3d3d60aaf4e09abc4dabf4073f5`, committed the
  separate FastAPI/Starlette security remediation and Phase 7 documentation.
  The fix did not upgrade the preserved original `.venv` or establish fresh
  live integration.
- The sixth commit, `804a268b721d6cb42e71461c2d175db4889162da`, committed the
  MIT license, release-preparation documentation and local-artifact ignore rules.
  All six completed commits remain intact and in order in the local development
  repository. The publication snapshot contains the current reviewed tree without
  inherited Git history; it has no commits or remote until separately approved.

| Approved source commit / new work | Standalone baseline commit | Purpose |
|---|---|---|
| `ebe3a492d87226eb19e26b7b2cd04cc30ea16c13` | `5c4e57cdf541c55e654ccb02584caf9e6c26a17c` | Isolated local RAG implementation, UI, fixtures and tests |
| `44ea6a47545421fa7348f6b09af942b9751b1065` | `a9545cfb4f18485e57df30efbac607c31df4bea1` | Targeted Starlette multipart dependency remediation |
| `75675e0601fe197bbb21c2bc935d84c7a4113a9d` | `66e4fa14e5f10c085f3db92a2567c1d7d20d3305` | Original durable handoff |
| New standalone packaging work | `5c687508b98529681d78b11357a45d614db0ae76` | Independent frontend installation/builds, branding and documentation |
| New Python security remediation | `f4db5e559873a3d3d60aaf4e09abc4dabf4073f5` | FastAPI 0.133.0 / Starlette 1.3.1 and candidate-verification documentation |
| New release-preparation work | `804a268b721d6cb42e71461c2d175db4889162da` | Committed MIT license, final documentation and local-artifact exclusions |

Source project (provenance only): Family Finance Tracker, `main`, source HEAD
`75675e0601fe197bbb21c2bc935d84c7a4113a9d`. Its five modified finance files and ten
unrelated untracked entries are protected. Do not import or change them. Source
HEAD, branch, index, refs, remotes/config, status and 189 inventoried file hashes
were checked unchanged during extraction. No fetch, pull, push or branch switch
was used during that extraction. At that time the new repository had no remote;
the current published repository and synchronized `main` state are recorded in the
closeout snapshot above.

## Architecture and entry points

The React frontend and FastAPI backend are independent of the finance application.

| Path | Responsibility |
|---|---|
| `frontend/rag-demo.html` | Standalone HTML entry, referrer suppression |
| `frontend/src/ragDemo/main.jsx` | Sign-in, synthetic upload, questions, evidence, deletion and logout |
| `frontend/src/ragDemo/client.js` | Raw-file transport, deadlines and operation ownership |
| `frontend/src/ragDemo/style.css` | Plain CSS; no Tailwind/shared styles |
| `frontend/vite.rag.config.js` | Loopback dev/preview, no env/public directory or parent CSS config |
| `frontend/package.json`, `package-lock.json` | Minimal independent npm toolchain and lock |
| `frontend/tests/ragDemo.test.mjs` | Ten RAG transport/component regression tests |
| `rag_demo/app.py`, `auth.py` | Bounded routes, authentication and server sessions |
| `rag_demo/config.py`, `run_local.py` | Validated RAG settings and private interactive launcher |
| `rag_demo/service.py` | Upload quotas, concurrency/deadline and owner preflight |
| `rag_demo/pipeline.py`, `pdf_worker.py` | Extraction, chunking, Gemini, citations and isolated PDF work |
| `rag_demo/repository.py`, `schema.sql` | Parameterized owner transactions and one-time schema |
| `rag_demo/evaluate.py`, `evaluation/corpus.json` | Synthetic mock/live evaluator and labeled corpus |
| `rag_demo/run_tests.py`, `tests/` | Offline backend runner and 77 regression cases |
| `rag_demo/build_frontends.mjs` | Historical filename retained; now builds only RAG |

Upload: authenticated raw PDF/TXT -> bounded extraction -> page-aware chunks ->
Gemini document embeddings -> checked normalized 768-dimensional vectors ->
atomic owner-scoped PostgreSQL document/chunk insert.

Ask: verified session and document ownership -> Gemini query embedding -> exact
pgvector cosine retrieval -> generated answer from retrieved passages -> local
source indexes and literal quote validation -> answer/citations or abstention.
Default retrieval is top five, minimum score 0.65; chunks 900 characters with 150
overlap. The threshold is not calibrated, and quote validity is not entailment.
Runtime providers/storage never silently fall back to test fakes.

## Authentication, isolation and resource limits

Passwords use salted scrypt. Opaque bearer tokens stay in browser memory; only
SHA-256 digests and one-hour expiration are stored. Every protected request checks
its session server-side. Logout forgets the local token and requests revocation;
an unreachable server can leave that session alive until expiry. Refresh loses
the browser token. Owner IDs derive from verified sessions, not owner headers.

SQL values are bound parameters. The repository sets transaction-local `rag.owner`;
documents/chunks have forced RLS policies and matching owner/model/dimension
constraints. Foreign document IDs fail before provider calls. RLS is defense in
depth for a trusted app server, not protection against theft of its DB credentials.
Login throttles and the single-upload semaphore are process-local.

Preserved limits: 2 MiB upload, 40 PDF pages, 100,000 extracted characters, 160
chunks, 20 documents/account; 2 MiB decoded stream and 8 MiB total page-content
bytes. PDF work runs in a credential-free killable subprocess with five-second
deadline and 256 MiB cap plus OS limits. Windows controls were tested historically;
Linux controls were not verified by those tests. No OCR or complete OS sandbox.
Provider requests time out at 20 seconds; UI at 30; indexing has a cooperative
60-second deadline. A timed-out write may have completed: refresh before retrying.
No idempotency guarantee, automatic retry or silent model fallback is provided.

## Dedicated local database — recorded, not rechecked by extraction

| Item | Recorded configuration |
|---|---|
| Host / port | `127.0.0.1` / `5544`, loopback only |
| Database / schema | `fft_rag_demo` / `rag_demo` |
| App / bootstrap role | `rag_app` / `rag_bootstrap` |
| Container | `fft-rag-demo-local` |
| Volume / network | `fft_rag_demo_data` / `fft-rag-demo-net` |
| PostgreSQL / pgvector | 16.15 / 0.8.7 |
| Container limits | 512 MiB memory, one CPU, 128 processes |

Recorded image:
`pgvector/pgvector@sha256:a97d77306ff47cc1d8add4d000cec2207da2e110746318df3137ce53c337ca30`.
Infrastructure is external to both repositories; none was copied or operated on.

Five tables: accounts, sessions, embedding_contract, documents, chunks. Bootstrap
owns schema/tables. The application role has NOSUPERUSER, NOCREATEDB, NOCREATEROLE,
NOINHERIT, NOREPLICATION, NOBYPASSRLS, connection limit 10, no administrator
memberships and no database/schema CREATE. Grants are limited; contract read-only.
Role/database grants require separate review and are not all provisioned by schema.

**The existing service is initialized: do not rerun `rag_demo/schema.sql`, reset
data, recreate resources or substitute a finance connection.** Review this
non-idempotent schema before any separately approved fresh provisioning. No schema
or Docker operation is part of installation. Current liveness, privileges and
counts require an explicitly authorized future inspection; historical facts do
not prove current runtime state. Never dump container environment configuration.

## Models, configuration and local launch

Embedding: `gemini-embedding-001`, exactly 768 dimensions, separate retrieval task
types, normalization/finite checks. Preserve `embedding_contract`. Generation:
`gemini-3.5-flash-lite`, constrained JSON answer/citation response. Historical key
access is not a guarantee of future model availability.

Configuration **names only**:

- `RAG_DEMO_ENABLED`
- `RAG_DATABASE_URL`
- `RAG_GEMINI_API_KEY`
- `RAG_EMBEDDING_MODEL`
- `RAG_EMBEDDING_DIMENSIONS`
- `RAG_ANSWER_MODEL`
- `RAG_CHUNK_SIZE`
- `RAG_CHUNK_OVERLAP`

Normal launcher fixes the dedicated loopback DB/role/port and uses private getpass
prompts for its password and a separate RAG-only Gemini key. It saves no credentials
and loads no `.env`. It reads only `RAG_ANSWER_MODEL` as an optional process-only
override; defaults cover the other RAG settings. Do not set permanent user/machine
variables or put credentials in source, command history, chat, Git or screenshots.
The optional environment app path needs explicit RAG enablement and settings; its
validator permits another explicit loopback port, so keep the reviewed target 5544.

Requires Python 3.12+ and Node.js 22+. From the standalone root, create `.venv` only
if absent, without reusing another project's environment:

The `.venv` examples below are for fresh setup. The existing local `.venv` still
contains FastAPI 0.116.1, Starlette 0.47.2 and pip 25.0.1; it was not upgraded and
is not remediated. For approved patched checks, explicitly select the Phase 7
candidate interpreter identified below rather than this preserved environment.

```powershell
python -m venv .venv
.\.venv\Scripts\python.exe -m pip install -r rag_demo/requirements.txt
npm --prefix frontend ci
.\.venv\Scripts\python.exe -B -m rag_demo.run_local
```

With the approved dedicated DB available, enter credentials privately. In another
terminal at the same root: `npm --prefix frontend run dev`. Open
[the local RAG UI](http://127.0.0.1:5174/rag-demo.html), API loopback port 8001. Do
not run both source and standalone launchers concurrently on those ports. Use only
synthetic accounts/documents. Vite disables env/public loading and parent PostCSS
discovery, restricts file serving to frontend, and uses no service worker.
No runtime, provider or database was started for packaging validation.

## Standalone validation and commands

Run from the new root, with its new isolated environments:

```powershell
.\.venv\Scripts\python.exe -I -B rag_demo/run_tests.py
.\.venv\Scripts\python.exe -I -B -m pip check
npm --prefix frontend test
npm --prefix frontend run check
npm --prefix frontend run build
npm --prefix frontend ls --all
git diff --check
```

Fresh validation results are recorded below after execution. Python syntax is
checked by parsing all 18 committed Python files with `ast.parse` (no bytecode
files). The guarded test runner blocks external network/database and `.env` reads.
RAG frontend tests use a VM component harness and mocked transport; neither suite
is fresh live-integration or native browser-upload evidence. No separate ESLint,
formatter or static type-check target was present in the extracted project.

Build produces only ignored `frontend/dist/rag-demo.html` and assets, inside the
new repository. Existing output is not emptied. The helper keeps its historical
plural filename but no longer references the finance build or its settings.
The standalone suite has 10 frontend tests. The source's historical 101 combined
tests included 91 finance checks intentionally absent here.

Historical packaging validation on Windows, Python 3.12.14, Node 22.20.0 / npm 10.9.3, before the packaging commit:

| Check | Actual result |
|---|---|
| Isolated backend runner | 77 passed, zero failures/errors (46.302 seconds) |
| RAG frontend suite | 10 passed, zero failures/skips/cancellations |
| Python AST syntax | All 18 Python files parsed |
| JavaScript checks | All four declared node --check targets passed; build parsed JSX |
| Standalone RAG production build | Passed; 27 modules, HTML + CSS + JS only under frontend/dist |
| Resolved Vite configuration | Passed env/public/CSS isolation, loopback/strict port, frontend-only file scope, RAG entry/output checks |
| Python dependency conflicts | pip check: no broken requirements |
| Frontend dependency tree | npm ls --all: no invalid/missing dependencies |
| Frontend npm audit | Zero reported vulnerabilities (informational/low/moderate/high/critical all zero) |
| Whitespace | git diff --check passed; new files checked separately |
| Secrets | Pattern scan of working source, all three imported commit trees and build outputs; only reviewed synthetic test markers, no credentials identified |
| Git scope | At extraction: three imported commits and no remote; packaging was subsequently committed as `5c687508b98529681d78b11357a45d614db0ae76` |

That historical Python installation used FastAPI 0.116.1, Starlette 0.47.2, Uvicorn
0.34.3, HTTPX 0.28.1, psycopg 3.2.9 and pypdf 6.20.1. Frontend has only the five
direct dependencies listed below. Installation used public PyPI/npm registries
with inherited application credentials/settings removed, a fresh .venv and a
fresh frontend/node_modules, both inside the new repository. Raw check logs,
package-manager caches and local verification records are ignored in .verification.
No check failed. The frontend test runner emitted its expected --jitless/Wasm
warning. Git's configured CRLF conversion produced line-ending notices; there were
no whitespace errors. npm audit is an ecosystem database snapshot, not a complete
security certification or a Python vulnerability audit.

## Phase 7 security-remediation candidate verification

Candidate: `.verification/phase7-20261016T031027Z/candidate-env`, Python 3.12.14,
FastAPI 0.133.0, Starlette 1.3.1 and pip 26.2 (equivalent to 26.2.0). The new
`annotated-doc==0.0.5` package is a FastAPI transitive dependency; the other existing
package versions were preserved. pip is environment-only, not an application pin.

Recorded results: dependency resolution and `pip check` passed; 77 backend tests,
six additional JSON content-type checks, 10 frontend tests, production build and
18 Python syntax checks passed. The fresh candidate audit covered all 21 installed
packages with zero findings and no collection skips, resolving all 12 Phase 5
advisories in that candidate. No application compatibility fix was needed; the
HTTPX TestClient fallback emits a nonblocking deprecation warning.

The candidate and its verification artifacts are ignored local files, not part of
this checkpoint. The record is
`.verification/phase7-20261016T031027Z/accepted-remediation.json`. These tests did not
run in the original `.venv`, which deliberately retains the previous vulnerable
versions. No new live Gemini, PostgreSQL/pgvector or browser rehearsal was performed;
these offline results are not public-production readiness or complete certification.

## Historical live/manual evidence and limitations

These source-project results were recorded before extraction. They are not fresh
calls made by this packaging task:

| Check | Historical result |
|---|---|
| Real API integration | 24 live checks passed |
| Paced live evaluation | 30 questions; zero request errors; Hit@1 83.33%; Recall@5 100% |
| Citation relevance | 35/35 |
| Unsupported abstention / false abstention | 6/6 / 0 of 24 answerable |
| Evaluation security checks | 10/10 |
| Source regressions | 77 backend; 101 combined frontend; both source builds passed |
| PDF browser rehearsal | Actual upload/indexing, answer and expanded citation inspected |
| TXT browser rehearsal | **MANUAL UI VERIFICATION — user-reported pass**, not automated |

The manual TXT report covered sign-in, browser file selection/upload, indexing,
expected answers and unsupported-question handling. It did not separately attest
expanded citation inspection. The automated picker stalled; an API test was never
used to claim browser TXT success. Historical closeout verified the document's
synthetic owner, used supported owner deletion/logout, confirmed zero accounts,
sessions, documents and chunks and preserved the contract at one. Temporary
launchers and credential handoffs were removed then; no credentials were copied.
These are historical cleanup results, not new row-count assertions.

Earlier Gemini HTTP 429 was confirmed. The earlier q12/diagnostic error remains
inconclusive. Later success does not explain that error. Earlier q07 false
abstention was reproduced as citation field-name drift and fixed with the required
response schema without relaxing quote checks. Provider errors are sanitized;
availability/quota remain uncertain. The adapter assumes the first candidate text
part contains JSON. No complete semantic accuracy, injection resistance,
distributed abuse controls, TLS/public deployment or production readiness claim.

## Evaluation and safe cleanup

`evaluation/corpus.json` has six invented policy documents, 18 gold sections, 24
answerable questions (six multi-section) and six unsupported questions. Mock mode:

```powershell
.\.venv\Scripts\python.exe -I -B rag_demo/run_tests.py --evaluate-mock
```

The label-blind lexical mock is not a semantic benchmark and can score poorly on
same-topic unsupported questions. Live mode requires separate approval for DB
writes/provider calls/charges and reviewed cleanup. Do not run during packaging:

```powershell
.\.venv\Scripts\python.exe -B -m rag_demo.evaluate --live --allow-provider-requests
```

Use `--environment` only with securely configured RAG process settings; the private
prompt path uses Settings defaults. Default run uses 43 embeddings and up to 30
generations; the shipped CLI has no pacing/retries. The successful paced run used
a separate validation driver, not a committed CLI option. Request/schema errors,
missing/failed mandatory isolation requests and logout failures cause nonzero
exit status; expected unsupported abstention is measured normally.

The live evaluator creates two accounts and retains two accounts/five documents.
It does not clean existing data or initialize schema. Before any live run, plan
explicit owner-scoped deletion of exactly verified synthetic documents (chunks
cascade) and session revocation. Empty account removal needs a separately reviewed
bootstrap operation constrained to exact UUID/username pairs because rag_app has
no account DELETE. Never wipe tables or delete by broad username prefix. Verify
all synthetic records removed and preserve the single embedding contract row.
Private cleanup/credential handoff scripts are intentionally not shipped.

Metrics measure labeled-section retrieval and citation overlap; they do not prove
every generated claim. Expected abstention does not count as an operational error.

## Dependencies and security scope

Current declarations use FastAPI 0.133.0 and Starlette 1.3.1; Uvicorn 0.34.3,
HTTPX 0.28.1, psycopg[binary] 3.2.9 and pypdf 6.20.1 are unchanged. The original
second imported commit remains separate and fixed **GHSA-2c2j-9gv5-cj73 /
CVE-2025-54121**, multipart
file rollover blocking the event loop:
[official Starlette advisory](https://github.com/Kludex/starlette/security/advisories/GHSA-2c2j-9gv5-cj73).
That original targeted fix used FastAPI 0.116.1 / Starlette 0.47.2; those historical
versions are still installed in the preserved `.venv`.

Phase 5 subsequently identified six Starlette and six pip advisories affecting that
older environment. Phase 7 resolved all 12 in the separate candidate described
above; the old environment remains unchanged. Current RAG routes use raw bodies,
not multipart/forms, StaticFiles, FileResponse, HTTPEndpoint subclasses or sensitive
request.url decisions. This static observation was not used to dismiss advisories.
Review current advisories before adding paths or public release; the recorded
clean candidate audit is not complete certification. Python transitives are not
fully locked.

pypdf 6.20.1 includes the inline-image infinite-loop fix first released in 6.1.3:
[official pypdf advisory](https://github.com/py-pdf/pypdf/security/advisories/GHSA-vr63-x8vc-m265).
Resource bounds still matter; they are not a complete operating-system sandbox.

Standalone npm direct dependencies are React/React DOM 18.3.1, plugin-react 4.7.0,
Vite 6.4.4 and esbuild 0.25.12. Vite 6.4 is the nearest currently supported line;
6.4.4 incorporates the reviewed October 2026 file-serving fixes. The React plugin
supports Vite 6 and esbuild matches Vite's 0.25 line. No finance manifest/lockfile,
Tailwind, PWA, router, chart/store or backend dependency was imported:
[release policy](https://vite.dev/releases),
[file-serving advisory](https://github.com/vitejs/vite/security/advisories/GHSA-rq7h-c2jc-7f22).
The npm lock records frontend transitives. A pattern secret scan is useful but
cannot recognize every possible credential format.

## License and source-only publication scope

The user approved the MIT License for this project. The root [LICENSE](../LICENSE)
uses Copyright (c) 2026 Nithish Kumar V.; it does not assert ownership of or relicense
third-party dependencies. No third-party notices, vendored libraries, external
assets or external datasets were identified in the included application source;
the fixtures and six-document evaluation corpus are explicitly synthetic. This is
a source/metadata review, not an independent certification of authorship.

Installed candidate metadata includes MIT, BSD-3-Clause, LGPLv3 (psycopg and
psycopg-binary), MPL-2.0 (certifi), PSF-2.0 and Apache-2.0 licenses. The frontend
lockfile also includes ISC and CC-BY-4.0 (caniuse-lite build-time data). These are
separately installed dependencies, not code vendored in this repository. Their
license files and notices remain with their packages. No material conflict was
identified for publishing this project source under MIT. Any future distribution
of bundled dependencies, binaries, containers, generated assets or external data
requires a separate review of their notice, attribution and source obligations.

Personal workstation paths were removed from the current guides. Earlier local
commits retain historical local-path and source-provenance references. The approved
publication approach copies only the current reviewed 38-file tree into a separate
snapshot without an inherited .git directory, preserving the six local commits.
No snapshot Git identity has been selected or configured; author and committer
metadata must be reviewed before any separately approved initial commit. No local
history rewrite is authorized or was performed.

## Phase 9 runtime-readiness inspection

Read-only inspection found the named dedicated RAG container running with its
recorded pinned image and loopback-only host port 5544. The patched Phase 7
candidate interpreter and frontend dependencies are present. No listener was found
on the API/UI ports 8001/5174, and no RAG database/provider configuration was
present in the inspecting process. The preserved `.venv` still has the old pins.

No database login or SQL, Gemini request, browser rehearsal, install, test rerun or
runtime launch was performed in this phase. Current database identity, role/RLS
privileges, schema/contract contents, model access, end-to-end answers/citations,
isolation and cleanup remain unverified since extraction. A fresh check needs
separate authorization for provider calls/charges, privately entered RAG-only
credentials, the patched interpreter, explicit local database identity/security
checks, synthetic uploads and owner-scoped cleanup with the contract preserved.
This does not block a clearly documented offline portfolio source release.

## Approval boundaries and next steps

1. Use the committed standalone packaging and inventory; its initial commit is
   complete. Backend implementation, schema and frontend lockfile are unchanged
   by this security checkpoint.
2. Preserve all six completed local commits, including the separate security fix
   and committed MIT/release preparation.
   No amendments, history rewrite, resets or clean. Further changes require their
   own approval.
3. MIT/license and release preparation are committed. Review the separate clean
   publication snapshot and approve its future author/committer metadata and initial
   commit separately. Obtain explicit publication approval before creating a GitHub
   repo, configuring a remote or pushing. No such operation has occurred.
4. If desired, separately authorize a normal launcher/manual UI rehearsal in this
   extracted copy, using the existing dedicated DB and separate RAG credential.
   Do not infer fresh live sign-off from offline tests or run competing launchers.
5. Broader provider pacing/diagnostics, transitive dependency review and quality
   calibration are separate tasks. Do not weaken security or thresholds for scores.

Never change finance files or its credentials, environment files, Docker resources,
database state, schema/embedding contract, model contract or production deployments
as a side effect of packaging. Do not copy private handoffs or generated artifacts.
The MIT license and release preparation are committed locally; publication remains
separately gated. No public release, deployment or production readiness is
authorized. Keep `.venv`,
node_modules, build/cache outputs, `.env*`, credentials
and generated evaluation/diagnostic material out of Git.

## Final version-controlled-content inventory

38 current tracked source/documentation/license/manifest files, including the
committed LICENSE (generated environments,
node_modules, caches, verification logs and build outputs are excluded):

```text
.gitignore
LICENSE
README.md
docs/RAG_PROJECT_HANDOFF.md
frontend/package-lock.json
frontend/package.json
frontend/rag-demo.html
frontend/src/ragDemo/client.js
frontend/src/ragDemo/main.jsx
frontend/src/ragDemo/style.css
frontend/tests/ragDemo.test.mjs
frontend/vite.rag.config.js
rag_demo/README.md
rag_demo/__init__.py
rag_demo/app.py
rag_demo/auth.py
rag_demo/build_frontends.mjs
rag_demo/config.py
rag_demo/evaluate.py
rag_demo/evaluation/corpus.json
rag_demo/pdf_worker.py
rag_demo/pipeline.py
rag_demo/repository.py
rag_demo/requirements.txt
rag_demo/run_local.py
rag_demo/run_tests.py
rag_demo/schema.sql
rag_demo/service.py
rag_demo/tests/__init__.py
rag_demo/tests/fakes.py
rag_demo/tests/fixtures/insurance.txt
rag_demo/tests/fixtures/savings.txt
rag_demo/tests/fixtures/travel.txt
rag_demo/tests/test_evaluation.py
rag_demo/tests/test_hardening.py
rag_demo/tests/test_rag.py
rag_demo/tests/test_response_schema.py
rag_demo/tests/test_settings.py
```
