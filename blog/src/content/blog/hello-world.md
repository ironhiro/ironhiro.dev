---
title: '블로그를 시작합니다'
description: 'ironhiro.dev 블로그 첫 글. Cloudflare Pages와 Astro로 만든 이유.'
pubDate: 2026-10-08
tags: ['blog', 'astro', 'cloudflare']
---

키오스크, 결제기, 카메라처럼 소프트웨어와 하드웨어가 만나는 지점에서 겪은 문제와 해결 과정을 기록하려고 합니다.

## 이 블로그는 이렇게 만들었습니다

- **Astro**로 정적 사이트 생성
- **Cloudflare Pages**로 무료 호스팅
- GitHub에 push하면 자동 배포

```csharp
public interface IPayment
{
    Task<PaymentResult> PayAsync(PaymentRequest request, CancellationToken ct);
    Task<PaymentResult> CancelAsync(string transactionId, CancellationToken ct);
}
```

새 글은 `src/content/blog/`에 마크다운 파일을 추가하면 됩니다.
