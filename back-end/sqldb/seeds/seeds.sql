INSERT INTO users (first_name, last_name, email, password)
VALUES (
    'Scott',
    'Ming',
    'scottming@gmail.com',
    '$2b$10$OH5.yeKnb6m4.wrQVCijQOyFGlU/x3aBoB22lfNByzRMai33TBWmu'
  ),
 
  (
    'Lavender',
    'Grace',
    'lavendergrace@gmail.com',
    '$2b$10$LXMcvGHR3smpnVLErJvxCuT4fK4MjZkfiFN6sxDq6xWVu65AJtKW.'
  );

  INSERT INTO expenses (user_id, expense_type, category, amount, expense_date)
VALUES (
    1,
    'income',
    'salary',
    50,
    'Mon Apr 12 2021'
  ),
  (
    2,
    'expense',
    'gas',
    100,
    'Mon Apr 12 2021'
  )