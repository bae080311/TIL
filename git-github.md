📌Git, Git Hub
============
git 이란?
---------
형상 관리 또는 버전 관리를 위해 사용하는 시스템이다.

git과 git hub의 차이점은?
-------------------------
 Git은 프로젝트 버전 관리를 위한 도구이며,  GitHub는 Git기반으로 한 원격 저장소 호스팅 및 협업 플랫폼입니다. Git을 사용하여 로컬에서 개발하고, GitHub에 저장소를 호스팅하여 다른 사람들과 협업하거나 프로젝트를 공유할 수 있습니다.


git clone
----------
* git clone (주소) 형식으로 명령어를 사용합니다.
* 원격 저장소를 로컬 디렉토리로 복제하는 작업을 수행합니다.

git commit
-------------
* 모든 변경 내용이 적용되어 저장소와 워킹트리가 동기화 됩니다.
* git commit 이렇게 사용하고 다음에 -m을 써주면 message의 약자이기 때문에 쌍따옴표("") 안에 설명 메세지를 작성할 수 있습니다.
* 디렉토리 전체를 복사하여 붙여넣는 것과 비슷합니다.

git branch
----------
* 하나의 commit과 그 부모 commit들을 포함하는 작업 내역입니다.
* branch는 커다란 branch로 만들기 보다, 작은 단위로 잘게 나누는게 좋습니다.
* git branch <브랜치명>으로 사용합니다.

git Merge
-----------
* 두 별도의 브랜치를 합치는 명령어입니다.
* 두개의 부모를 가리키는 특별한 커밋을 만들어 냅니다.

git add
--------------
* 작업 디렉토리 상의 변경 내용을 스테이징 영역에 추가하기 위해서 사용하는 명령어입니다.
* 다음 변경(commit)을 기록할 때까지 변경분을 모아놓기 위해서 사용합니다.
* commit  명령어를 통해 명시적으로 기록을 남기기 전까지는 아무리   add    명령어를 많이 실행해도 변경 이력에는 영향이 없습니다.
* git add  파일이름.확장자명으로 사용합니다.

git push
--------------
* 원격 저장소에 코드 변경분을 업로드하기 위해 사용하는 명령어입니다.
* 사용법은  git push <저장소명><브랜치명> 이렇게 사용 합니다.

git status
-------------
* 이 명령어는 상태를 확인하는데 쓰입니다.
* 사용법은 git status만 적으면 됩니다.

git init
---------
* 초기화하다 라는 뜻으로 어디에서 버전 관리를 할지 선언하는 것 입니다.
* 초기화를 하게 되면 로컬 저장소가 폴더 내에 생성 됩니다.
* 주의할 점은 하나의 폴더에는 하나의 로컬 저장소만 유지해야 한다는 점입니다.
    * ex)작업중인 폴더에 로컬 저장소를 만들었는데 그 폴더에 또 소스를 받아오면 로컬 저장소가 자동으로 생성 되어서 충돌이 됩니다.

staging area
-----------------
* commit이 가능한 영역입니다.
* commit을 하기 전 파일을 담아두는 상자라고 볼 수 있습니다.
* git add 명령어를 통해 수정된 파일을 스테이징 영역에 담을 수 있습니다.

working directory
------------------
* 현재 작업하고 있는 영역 즉, 작업을 하고 있는 프로젝트 디렉토리 입니다.
* 아직 추적(track)하고 있지 않은 상태입니다.
* working tree라고도 불립니다.

Repository
----------
* git으로 관리하는 프로젝트 저장소입니다.
* git repository는 두가지로 나뉩니다.
    * Local repository: 본인의 컴퓨터에 저장된 로컬 버전의 프로젝트 저장소입니다.
    * Remote repository: 로컬 repository와는 반대로 내 컴퓨터가 아닌 버전의 프로젝트 저장소입니다.


