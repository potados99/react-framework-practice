# Yarn Berry 마이그레이션 완료 🎉

이 프로젝트가 npm에서 **Yarn Berry**로 성공적으로 전환되었습니다!

## 📋 변경 사항

### 설치된 Yarn 버전

- **Yarn Berry 4.10.3** - 최신 안정 버전

### 주요 파일 변경

1. ✅ `package-lock.json` 제거
2. ✅ `node_modules/` 제거
3. ✅ `yarn.lock` 생성 (Git에 커밋)
4. ✅ `.yarnrc.yml` 생성 (Yarn 설정)
5. ✅ `.gitignore` 업데이트 (Yarn Berry 항목 추가)

### 설정 - `.yarnrc.yml`

```yaml
yarnPath: .yarn/releases/yarn-4.10.3.cjs # Yarn 바이너리 경로
```

현재 최소한의 설정으로 유지 중입니다. 추가 커스터마이징은 필요에 따라 `yarn config` 명령어로 확인 가능합니다.

## 🚀 주요 이점

| 기능                 | 설명                           |
| -------------------- | ------------------------------ |
| **빠른 설치**        | 의존성 해석 속도 향상          |
| **더 작은 용량**     | 효율적인 캐시 관리             |
| **더 나은 보안**     | 의존성 트리 검증 강화          |
| **엄격한 버전 관리** | 정확한 잠금 파일로 재현성 보장 |

## 📖 주요 명령어

```bash
# 의존성 추가
yarn add <package>

# 의존성 제거
yarn remove <package>

# 패키지 업그레이드
yarn upgrade <package>

# 모든 의존성 업그레이드
yarn upgrade-interactive

# 프로젝트 정보 확인
yarn info

# Yarn 버전 확인
yarn --version
```

## ⚙️ IDE 설정 (선택)

### VS Code

`.vscode/settings.json`에 다음을 추가하면 더 좋은 지원을 받을 수 있습니다:

```json
{
  "search.exclude": {
    "**/.yarn": true
  }
}
```

### WebStorm/IntelliJ

- Preferences → Languages & Frameworks → Node.js → Yarn 설정에서 로컬 Yarn 선택

## 📝 중요한 파일들 (Git에 커밋)

```
.yarn/
  releases/
    yarn-4.10.3.cjs          ✅ Git에 커밋
.yarnrc.yml                   ✅ Git에 커밋
yarn.lock                     ✅ Git에 커밋 (package-lock.json 대체)
.gitignore                    ✅ 업데이트됨
```

## ❌ Git에서 제외되는 항목

```
.yarn/cache/                 # 의존성 캐시
.yarn/unplugged/             # 펼쳐진 패키지
.yarn/build-state.yml
.yarn/install-state.gz
```

## 🆘 문제 해결

### "cannot find module" 오류

```bash
# 캐시 초기화 후 재설치
yarn install --refresh
```

### 기존 node_modules 제거

```bash
rm -rf node_modules
yarn install
```

## 📚 추가 자료

- [Yarn 공식 문서](https://yarnpkg.com/)
- [PnP 문서](https://yarnpkg.com/features/pnp)
- [마이그레이션 가이드](https://yarnpkg.com/getting-started/migration)

---

**마이그레이션 완료 날짜**: 2025-10-23  
**Yarn 버전**: 4.10.3
