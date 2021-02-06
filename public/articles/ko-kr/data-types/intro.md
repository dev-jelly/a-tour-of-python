# 자료형

파이썬에서 어떻게 변수를 선언할 수 있을까요? 파이썬은 별도의 변수 선언 키워드가 존재하지 않습니다. 아래의 코드를 실행해보세요.

```python
this_is_number = 100
this_is_string = "와우 이건 문자열이라고!"

print(this_is_number)
print(this_is_string)
```

파이썬은 내장 타입들이([Built-in Types](https://docs.python.org/3/library/stdtypes.html)) 존재하지만, 기본적으로 동적 타입을 가집니다. 다른 언어라면 아래와 갈은
코드는 에러가 발생하겠지만 파이썬에서는 문제가 없죠.

```python
this_is_number = 100
this_is_string = "와우 이건 문자열이라고!"

this_is_number = "아니 이건 숫자일텐데??"
this_is_string = 300

print(this_is_number)
print(this_is_string)
```

> *Q. 타입이 없다면 오류를 일으킬 확률이 높지 않나요??*
>
> A. 파이썬에서는 변수의 타입을 고정시킬 순 없지만, 타입 관련 에러를 방지할 수 있는 기능인 타입 힌트가 있습니다. 타입 힌트에 대해서도 다룰 예정입니다.

[다음으로](#data-types/list/intro)
