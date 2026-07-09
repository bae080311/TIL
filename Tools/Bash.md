# Bash

Unix 계열 운영체제에서 명령 줄 인터페이스를 위한 쉘(shell)입니다 쉘(sh)을 기반으로 개발되어 Unix, Linux, macOS 등에서 기본 쉘로 많이 사용됩니다

Bash는 다양한 기능들을 제공합니다

- 명령어 실행: 다양한 명령어로 파일 수정, 삭제, 생성, 실행이 가능합니다
- 파일 시스템 탐색: 디렉토리 변경, 파일 및 폴더 확인 등의 파일 시스템 관련 명령어를 제공합니다
- 환경 변수 설정: 환경 변수를 설정하여 사용자가 쉘 세션 동안 사용할 수 있는 데이터를 지정할 수 있습니다
- 파이프 라인: 여러 명령어를 파이프(리눅스와 유닉스 계열 운영체제에서 여러 명령어를 연결하여 데이터를 처리하는 강력한 도구)로 연결하여 입력과 출력을 연결하고 데이터를 변환하는 작업을 수행할 수 있습니다
- 스크립팅: Bash 스크립트를 작성하여 여러 명령어와 흐름 제어 구조를 결합하여 자동화된 작업을 수행할 수 있습니다

- ls: 현재 디렉토리의 파일과 폴더 목록을 출력

```bash
$ ls
```

- cd: 디렉토리 변경 명령어 지정된 디렉토리로 파일 또는 폴더 이동시킴

```bash
$ cd directoryName
```

- mkdir: 새로운 디렉토리 생성

```bash
$ mkdir newDirectoryName
```

- rm: 파일이나 디렉토리 삭제

```bash
$ rm fileName
$ rm directoryName
```

- cp: 파일이나 디렉토리 복사

```bash
$ cp sourceFile destinationFile
$ cp -r sourceDirectory destinationDirectory
```

- mv: 파일이나 디렉토리를 이동하거나 이름을 변경

```bash
$ mv beforeName afterName
$ mv sourceFile destinationDirectory
```

- pwd: 현재 작업 중인 디렉토리 경로 출력

```bash
$ pwd
```

- cat: 파일 내용 출력

```bash
$ cat fileName
```

- echo: 문자열 출력

```bash
$ echo "Hello, World!"
```

- grep: 파일 내에서 특정 패턴을 검색

```bash
$ grep "pattern" fileName
```

- head: 파일의 앞 부분 출력

```bash
$ head -n 10 fileName  # 파일의 첫 10줄을 출력
```

- tail: 파일의 뒷 부분 출력

```bash
$ tail -n 10 fileName  # 파일의 뒤에서 10줄을 출력
```

- chmod: 파일 또는 디렉토리 권한 변경

```bash
$ chmod +x fileName  # 파일에 실행 권한을 추가
```
