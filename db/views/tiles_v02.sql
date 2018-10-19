SELECT 'all_customers' as inent, COUNT(*) as count, 0 as sum, `customers`.user_id as user_id
FROM `customers`
group by user_id
union
SELECT 'this_week_customers' as inent, COUNT(*) as count, 0 as sum, `customers`.user_id as user_id
FROM `customers`
WHERE YEARWEEK(`customers`.`created_at`) = YEARWEEK(CURRENT_DATE)
group by user_id

union

SELECT 'this_week_products'                                    as inent,
       COUNT(*)                                                as count,
       SUM(customer_products.price * customer_products.amount) as sum,
       `customer_products`.user_id                             as user_id
FROM `customer_products`
WHERE YEARWEEK(`customer_products`.`created_at`) = YEARWEEK(CURRENT_DATE)
group by user_id
union
SELECT 'last_week_products'                                    as inent,
       COUNT(*)                                                as count,
       SUM(customer_products.price * customer_products.amount) as sum,
       `customer_products`.user_id                             as user_id
FROM `customer_products`
WHERE YEARWEEK(`customer_products`.`created_at`) = YEARWEEK(CURRENT_DATE - 7)
group by user_id

union

SELECT 'this_week_services'                                    as inent,
       COUNT(*)                                                as count,
       SUM(customer_services.price * customer_services.amount) as sum,
       `customer_services`.user_id                             as user_id
FROM `customer_services`
WHERE YEARWEEK(`customer_services`.`created_at`) = YEARWEEK(CURRENT_DATE)
group by user_id
union
SELECT 'last_week_services'                                    as inent,
       COUNT(*)                                                as count,
       SUM(customer_services.price * customer_services.amount) as sum,
       `customer_services`.user_id                             as user_id
FROM `customer_services`
WHERE YEARWEEK(`customer_services`.`created_at`) = YEARWEEK(CURRENT_DATE - 7)
group by user_id

union

SELECT 'this_week_expenses' as inent, COUNT(*) as count, SUM(expenses.price) as sum, `expenses`.user_id as user_id
FROM `expenses`
WHERE YEARWEEK(`expenses`.`created_at`) = YEARWEEK(CURRENT_DATE)
group by user_id
union
SELECT 'last_week_expenses' as inent, COUNT(*) as count, SUM(expenses.price) as sum, `expenses`.user_id as user_id
FROM `expenses`
WHERE YEARWEEK(`expenses`.`created_at`) = YEARWEEK(CURRENT_DATE - 7)
group by user_id;

