# 비동기
다트에서는 비동기프로그래밍을 위한 강력한 지원을 제공합니다.
오래걸리는 작업을 처리할 때 UI가 멈추지 않도록 하는 중요한 패러다임입니다.

## Future
비동기 연산의 결과를 나타내는 객체입니다.
이는 나중에 값이나 오류를 포함할 promise와 같습니다.
- value(): 이미 알고 있는 값으로 즉시 완료되는 Future를 생성합니다.
- delayed(): 지정된 시간 후에 완료되는 Future을 생성합니다.
- error(): 오류로 완료되는 Future을 생성합니다.
- 복잡한 비동기 로직을 직접 제어하려면 Completer을 사용할 수 있습니다.
```dart
import 'dart:async';

Future<String> complexOperation() {
  final completer = Completer<String>();

  // 비동기 작업 시뮬레이션
  Timer(Duration(seconds: 2), () {
    if (DateTime.now().second % 2 == 0) {
      completer.complete('성공!');
    } else {
      completer.completeError('실패!');
    }
  });

  return completer.future;
}
```
## Stream
시간에 따라 여러 비동기 이벤트를 제공하는 방법입니다.
파일 읽기, 웹소켓 메시지, 사용자 입력 이벤트 등과 같이 여러 값을 비동기적으로 처리해야 할 때 유용합니다
