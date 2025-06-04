---
title: Trivy vulnerability scanner for containers... and more!
description: Trivy vulnerability scanner for containers... and more!
icon: fa-solid fa-code
author: Jose Cerrejon
date: 2025-05-22
category:
    - Developer
tags:
    - DevOps
    - Security
image: /images/2025/05/trivy_logo.png
---

# Trivy: Vulnerability Scanner for Containers... and More!

![Trivy](/images/2025/05/trivy_logo.png "Trivy Logo")

Ah!... The wonderful world of security, especially in the realm of containers, which has seen a boom in the adoption of tools to detect vulnerabilities. Among my favorites is _Trivy_, which stands out as a versatile and powerful scanner, and today I'll show you how to use it.

The articles I've read out there are somewhat outdated or AI-generated, and it pains me, mostly because we developers can't live ignoring security without having to take a cybersecurity course, right? Well, let's get to it.

## What is Trivy? 🤷

-   But I don't know what _Trivy_ is...
-   Patience, young _Padawan_. I'll tell you.

_Trivy_ is an open-source tool developed by _Aqua Security_, renowned for its speed and simplicity in detecting vulnerabilities in container images, file systems, application dependencies, etc. **You don't need to know more**. There are many vulnerability scanners: _Chimera, Clair, Snyk_,... but I was looking for one that was easy to use and didn't give me problems. I've been using this one for years and it works great for me.

## How to install it? 📦

Well, it offers several installation methods depending on the operating system and user needs. I'll refer you to their [GitHub](https://github.com/aquasecurity/trivy/releases) so you can see the available download versions. I'll comment on the way I install it on _macOS_:

**macOS (with Homebrew):**

```sh
brew install aquasecurity/trivy/trivy
```

You can also do it **using Docker,** by the way, I use a lighter client on _macOS_ called [OrbStack](https://orbstack.dev):

```sh
docker run aquasec/trivy image <image_name>
```

Couldn't be easier. 😉

## How to use Trivy locally? 💻

It allows scanning different types of targets:

-   **Container images:**

```sh
trivy image image_name:tag
trivy image alpine:3.15 # Example
```

-   **File system or directories:**

![Trivy file system scan](/images/2025/05/trivy_fs.png "Trivy file system scan")

It will scan the current directory for vulnerabilities in dependencies and sensitive files.

```sh
trivy fs .
trivy fs --scanners vuln,secret,misconfig . # Scans for vulnerabilities, secrets, and misconfigurations
```

-   **Application dependencies:**

Automatically detects files like `requirements.txt|pyproject.toml|uv.lock` (Python), `package.json` (Node.js),...

```sh
trivy config path/to/file
```

## Configuration and customization 🔧

Although what I've explained is enough, it allows customizing its behavior through a configuration file. You can create a `.trivyignore` file to exclude certain files or directories from the scan (similar to a `.gitignore`, indeed). You can also use a `trivy.yaml` file to define specific configurations like the severity level to report.

```yaml
ignore:
    - path/to/ignored/file
    - path/to/ignored/directory
```

You have different options to adjust its behavior using flags like `--severity`, `--format`, `--output`, and environment variables starting with `TRIVY_` (like `TRIVY_SEVERITY=CRITICAL`).

## Tips and best practices 📚

-   **Review the arguments you can pass via the Terminal** to customize the scan.
-   **Always scan before uploading images to a registry** to prevent vulnerabilities, especially, from reaching production.
-   **Use the `--exit-code` flag** to automatically break insecure builds in CI/CD pipelines. I mention it but **I don't use it**. It's good to warn about vulnerabilities, but it's not always necessary to break the build.
-   **Automate periodic scanning** of already deployed images to detect new vulnerabilities.
-   **Customize reports** using output formats (`table`, `json`, `sarif`, etc.) according to your needs, although the console results are sufficient for me.

## Conclusions 📝

For me, it was a great discovery years ago, as it stands out for its ease of installation and use. It allows detecting vulnerabilities of very different types as I mentioned, and helps you strengthen the security of your projects without adding complexity that is sometimes unnecessary.

I decided to mention it because I have colleagues who didn't know about it, and I find it a very useful tool for any developer.

I hope this helps you, and if you have any questions,... Here I am! 😉
