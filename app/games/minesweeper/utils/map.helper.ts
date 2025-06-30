export function initializeNumberPool(length: number, exceptNumber: number): number[] {
  const pool = [];

  for (let index = 0; index < length; index++) {
    if (index !== exceptNumber) {
      pool.push(index);
    }
  }

  return pool;
}

// 0 이상 max 미만의 숫자 중 겹치지 않는 count개의 숫자를 생성하는 함
// Fisher-Yates shuffling 알고리즘 - 시간 복잡도 O(n)
export function generateRandomNumbers(max: number, count: number, exceptNumber: number = -1): number[] {
  if (count > max - 1) { // exceptNumber 제외
    throw new Error("생성하려는 숫자의 개수가 유효한 범위보다 큽니다.");
  }

  const result: number[] = [];
  const pool = initializeNumberPool(max, exceptNumber);

  for (let index = 0; index < count; index++) {
    const randomIndex = Math.floor(Math.random() * (pool.length - index));
    result.push(pool[randomIndex]);
    [pool[randomIndex], pool[pool.length - 1 - index]] = [pool[pool.length - 1 - index], pool[randomIndex]]; // 선택된 요소를 배열의 뒤쪽으로 옮겨 다시 선택되지 않도록 함 (swap)
  }

  return result;
}
