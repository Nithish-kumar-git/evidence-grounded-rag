# Evidence Grounded RAG

A standalone local demo for asking questions about synthetic PDF/TXT documents
and inspecting the retrieved evidence. React + FastAPI + PostgreSQL/pgvector +
Gemini. The API validates cited sources and exact quote substrings and can abstain
when evidence is insufficient. This does not establish semantic correctness.

This repository was extracted from approved RAG work without the Finance Tracker
application or its history. It is for supervised local demonstrations, not
production use. No deployment configuration or public deployment is included.

## Install and check

Requires Python 3.12+ and Node.js 22+. Run from this repository's root. Create the
virtual environment only if it does not already exist:

The `.venv` examples below describe a fresh setup. The preserved local `.venv`
still contains the old pins; do not apply this installation block to it or upgrade
it in place. Use the Phase 7 candidate documented in the handoff for approved
remediated checks.

```powershell
python -m venv .venv
.\.venv\Scripts\python.exe -m pip install -r rag_demo/requirements.txt
npm --prefix frontend ci
.\.venv\Scripts\python.exe -I -B rag_demo/run_tests.py
npm --prefix frontend test
npm --prefix frontend run check
npm --prefix frontend run build
git diff --check
```

The offline backend suite blocks external network/database and environment-file
reads; it uses test fakes. The frontend suite contains 10 RAG tests. Builds produce
only `frontend/dist/rag-demo.html` and assets; generated output is ignored. Backend
and frontend dependencies install only in this repository. Python top-level pins
are preserved; Python transitive dependencies are not fully locked.

**Live integration status (22 October 2026):** a fresh real-pipeline run was
blocked before any write because the dedicated loopback pgvector service was not
available and no RAG database or Gemini configuration was present in the checking
process. Gemini, pgvector ingestion/retrieval, citations, abstention and isolation
were therefore not re-verified. No mock result is presented as live evidence; see
the handoff for the exact environment findings and cleanup prerequisite.

## Run locally

First confirm the existing dedicated RAG database is available; it is not created
or initialized by installation. **Do not rerun `rag_demo/schema.sql` against the
already initialized database.** No finance database or credentials are required.

```powershell
.\.venv\Scripts\python.exe -B -m rag_demo.run_local
```

Enter the dedicated local app-role password and separate Gemini demo key only in
the launcher's private prompts. It saves neither and loads no `.env` file. It fixes
the DB to `127.0.0.1:5544`, `fft_rag_demo`, role `rag_app`, API to loopback port 8001,
and defaults to answer model `gemini-3.5-flash-lite`. `RAG_ANSWER_MODEL` is an
optional process-only override. Embeddings require `gemini-embedding-001` with 768
dimensions and the existing database contract. Model access is credential-specific.

In another terminal, from the repository root:

```powershell
npm --prefix frontend run dev
```

Open [the local UI](http://127.0.0.1:5174/rag-demo.html). Use a new synthetic account,
harmless documents and questions only. Uploads/questions are sent to Gemini.
Inspect citations, test an unsupported question, and perform reviewed owner-scoped
cleanup after rehearsals. Do not run the original and standalone launchers together
on these ports. No API, database or provider was started for extraction validation.

## Read before resuming

- [Backend/operator guide](rag_demo/README.md): limits, configuration names,
  database prerequisites, authentication, evaluation and safe cleanup.
- [Durable project handoff](docs/RAG_PROJECT_HANDOFF.md): imported commit mapping,
  independent commands, historical live/manual evidence and current limitations.

Earlier Gemini HTTP 429 was confirmed; the earlier q12 failure remains
inconclusive. Provider reliability is not guaranteed. The recorded manual TXT
browser rehearsal was user-reported, not automated. Extraction validation is
offline and does not renew live integration or UI sign-off.

Standalone packaging was committed in `5c687508b98529681d78b11357a45d614db0ae76`,
after the three imported RAG commits. The fifth commit,
`f4db5e559873a3d3d60aaf4e09abc4dabf4073f5`, committed the separate security fix:
FastAPI 0.133.0 and Starlette 1.3.1. Phase 7 passed 77 backend tests, six
additional JSON checks, 10 frontend tests and the production build; its isolated
21-package candidate audit had zero findings. These results apply to the candidate,
not the preserved `.venv`, and provide no fresh live Gemini/pgvector/browser proof.

The source is published at
<https://github.com/Nithish-kumar-git/evidence-grounded-rag>. The documentation
closeout started from remote `main` at
`3997dea5705a9ae24560c3a82d1d3581608fee2f`; use `git log -1` for the containing
documentation commit.
There is still no public application deployment. Review the recorded security and
integration limitations before any hosted release.

## License

Project code and documentation are offered under the [MIT License](LICENSE),
Copyright (c) 2026 Nithish Kumar V. Dependencies retain their own licenses; this
license does not relicense third-party packages, data or assets. See the handoff
for the source-only license review and remaining publication steps.
