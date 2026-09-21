# Dart란?
구글에서 개발한 클라이언트 최적화 프로그래밍 언어로 모든 플랫폼에서 빠르고 안정적인 애플리케이션을 개발하기 위해 설계되었습니다.
Dart는 Flutter 프레임워크의 기반이 되는 언어이며, 웹, 모바일, 데스크톱 애플리케이션을 개발하는 데 사용됩니다.

## 특징
- Dart는 클래스 기반의 객체 지향 언어입니다. 
```dart
class Person {
  String name;
  int age;

  Person(this.name, this.age);

  void introduce() {
    print('안녕하세요, 저는 $name이고 $age살입니다.');
  }
}

void main() {
  final person = Person('홍길동', 30);
  person.introduce();  // 출력: 안녕하세요, 저는 홍길동이고 30살입니다.
}
```
- 정적 타입 언어이지만, 타입 추론을 지원하여 타입 명시를 생략 가능합니다.
```dart
// 타입 명시
String name = '홍길동';
int age = 30;

// 타입 추론
var name = '홍길동';    // String으로 추론
var age = 30;         // int로 추론
final height = 175.5;  // double로 추론
```
- Dart는 `Future`, `Stream`, `async`, `await` 등을 통해 비동기 프로그래밍을 지원합니다.
```dart
Future<String> fetchData() async {
  // 비동기 작업 시뮬레이션
  await Future.delayed(Duration(seconds: 2));
  return '데이터';
}

void main() async {
  print('데이터 요청 시작');
  final data = await fetchData();
  print('받은 데이터: $data');
}
```
- Null 안정성을 도입하여, 변수가 null 가능성을 타입 시스템에 명시합니다.
```dart
// null이 될 수 없는 변수
String name = '홍길동';
// name = null;  // 컴파일 오류

// null이 될 수 있는 변수
String? nullableName = '홍길동';
nullableName = null;  // 허용됨
```
- 다중 플랫폼 지원 (네이티브, 웹, 개발 환경)
- 풍부한 표준 라이브러리
## Dart의 장점
- **통합 개발 환경**: 단일 언어로 모바일, 웹, 데스크톱 앱을 개발할 수 있습니다.
- **생산성**: 핫 리로드, 풍부한 도구, 직관적인 문법으로 개발 생산성을 높입니다.
- **성능**: AoT 컴파일을 통해 네이티브 성능에 가까운 실행 속도를 제공합니다.
- **안정성**: 강력한 타입 시스템과 null 안전성으로 많은 런타임 오류를 방지합니다.
- **확장성**: 표준 라이브러리와 풍부한 패키지 생태계를 통해 다양한 기능을 추가할 수 있습니다.
